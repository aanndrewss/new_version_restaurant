import { Injectable, UnprocessableEntityException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { RefreshTokensRepository } from './refresh-tokens.repository'
import { SignOptions, TokenExpiredError } from 'jsonwebtoken'
import { User } from '../users/users.model'
import { UsersService } from '../users/users.service'
import { RefreshToken } from './refresh-token.model'

const BASE_OPTIONS: SignOptions = {
	issuer: 'http://localhost:5000',
	audience: 'http://localhost:5000'
}

export interface RefreshTokenPayload {
	jti: number;
	sub: number
}

@Injectable()
export class TokenService {

	constructor(private jwtService: JwtService,
							private tokensRepository: RefreshTokensRepository,
							private userRepository: UsersService) {
	}

	async generateAccessToken(user: User): Promise<string> {
		const opts: SignOptions = {
			...BASE_OPTIONS,
			subject: String(user.id)
		}

		return this.jwtService.signAsync({}, opts)
	}

	async generateRefreshToken(user: User, expiresIn: number): Promise<string> {
		const token = await this.tokensRepository.createRefreshToken(user, expiresIn)

		const opts: SignOptions = {
			...BASE_OPTIONS,
			expiresIn,
			subject: String(user.id),
			jwtid: String(token.id)
		}

		return this.jwtService.signAsync({}, opts)
	}

	async resolveRefreshToken(encoded: string): Promise<{ user: User, token: RefreshToken}> {
		const payload = await this.decodeRefreshToken(encoded)
		const token = await this.getStoredTokenFromRefreshTokenPayload(payload)

		if (!token) {
			throw new UnprocessableEntityException('Refresh token not found')
		}

		if (token.is_revoked) {
			throw new UnprocessableEntityException('Refresh token revoked')
		}

		const user = await this.getUserFromRefreshTokenPayload(payload)

		if (!user) {
			throw new UnprocessableEntityException('Refresh token malformed')
		}
		return { user, token }
	}

	async createAccessTokenFromRefreshToken(refresh: string): Promise<{ token: string, user: User }> {
		const { user } = await this.resolveRefreshToken(refresh)

		const token = await this.generateAccessToken(user)

		return { user, token }

	}

	private async decodeRefreshToken(token: string): Promise<RefreshTokenPayload> {
		try {
			return this.jwtService.verifyAsync(token)
		} catch (e) {
			if(e instanceof TokenExpiredError) {
				throw new UnprocessableEntityException('Refresh token expired')
			} else {
				throw new UnprocessableEntityException('Refresh token malformed')
			}
		}
	}

	private async getUserFromRefreshTokenPayload (payload: RefreshTokenPayload): Promise<User> {
		const subId = payload.sub

		if(!subId) {
			throw new UnprocessableEntityException('Refresh token malformed')
		}
		return this.userRepository.getUserByID(subId)
	}

	private async getStoredTokenFromRefreshTokenPayload (payload: RefreshTokenPayload): Promise<RefreshToken | null> {
		const tokenId = payload.jti

		if(!tokenId) {
			throw new UnprocessableEntityException('Refresh token malformed')
		}
		return this.tokensRepository.findTokenById(tokenId)
	}

}