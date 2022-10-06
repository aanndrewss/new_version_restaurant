import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { User } from '../users/users.model'
import { TokenService } from '../tokens/token.service'
import { RefreshTokenDto } from '../tokens/refresh-token.dto'


export interface AuthenticationPayload {
	user: User
	payload: {
		type: string
		token: string
		refresh_token?: string
	}
}

@Injectable()
export class AuthService {

	constructor(private usersService: UsersService,
							private tokenService: TokenService) {
	}

	async login(userDto: CreateUserDto) {
		const user = await this.validateUser(userDto)
		const token = await this.tokenService.generateAccessToken(user)
		const refresh = await this.tokenService.generateRefreshToken(user, 60 * 60 * 24 * 30)

		const payload = this.buildResponsePayload(user, token, refresh)

		return {
			status: 'success',
			data: payload
		}
	}

	async registration(userDto: CreateUserDto) {
		const candidate = await this.usersService.getUserByEmail(userDto.email)
		if (candidate) {
			throw new HttpException('User already exist!', HttpStatus.BAD_REQUEST)
		}
		const hashPassword = await bcrypt.hash(userDto.password, 5)
		const user = await this.usersService.createUser({ ...userDto, password: hashPassword })
		const token = await this.tokenService.generateAccessToken(user)
		const refresh = await this.tokenService.generateRefreshToken(user, 60 * 60 * 24 * 30)

		const payload = this.buildResponsePayload(user, token, refresh)

		return {
			status: 'success',
			data: payload
		}
	}

	async refresh(tokenDto: RefreshTokenDto) {
		const { user, token } = await this.tokenService.createAccessTokenFromRefreshToken(tokenDto.refresh_token)

		const payload = this.buildResponsePayload(user, token)

		return {
			status: 'success',
			data: payload
		}
	}

	private async validateUser(userDto: CreateUserDto) {
		const user = await this.usersService.getUserByEmail(userDto.email)
		const passwordEquals = await bcrypt.compare(userDto.password, user.password)
		if (user && passwordEquals) {
			return user
		}
		throw new UnauthorizedException({ message: 'Incorrect password or email!' })
	}

	private buildResponsePayload(user: User, accessToken: string, refreshToken?: string): AuthenticationPayload {
		return {
			user: user,
			payload: {
				type: 'bearer',
				token: accessToken,
				...(refreshToken ? { refresh_token: refreshToken } : {})
			}
		}
	}
}
