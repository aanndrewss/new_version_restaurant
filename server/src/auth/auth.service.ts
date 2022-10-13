import { ForbiddenException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import * as bcrypt from 'bcryptjs'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { User } from '../users/users.model'
import { TokenService } from '../tokens/token.service'
import { RefreshTokenDto } from '../tokens/refresh-token.dto'
import * as uuid from 'uuid'
import { CreateTokenDto } from '../tokens/create-token.dto'
import { RefreshToken } from '../tokens/refresh-token.model'
import { InjectModel } from '@nestjs/sequelize'
import * as argon from 'argon2'


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
							private tokenService: TokenService,
							private refreshToken: RefreshToken,
							@InjectModel(User) private userRepository: typeof User) {
	}

	async login(userDto: CreateUserDto) {
		const user = await this.validateUser(userDto)
		const dtoUser = new CreateTokenDto(user)
		const tokens = await this.tokenService.generateTokens({ ...dtoUser })
		await this.tokenService.saveToken(dtoUser.id, tokens.refreshToken)

		return { ...tokens, user: dtoUser }
	}

	async registration(userDto: CreateUserDto) {
		const candidate = await this.usersService.getUserByEmail(userDto.email)
		if (candidate) {
			throw new HttpException('User already exist!', HttpStatus.BAD_REQUEST)
		}
		const hashPassword = await bcrypt.hash(userDto.password, 5)
		const activationLink = uuid.v4()
		const user = await this.usersService.createUser({ ...userDto, password: hashPassword })

		const dtoUser = new CreateTokenDto(user)
		const tokens = await this.tokenService.generateTokens({ ...dtoUser })
		await this.tokenService.saveToken(dtoUser.id, tokens.refreshToken)

		return { ...tokens, user: dtoUser }
	}

	async refresh(userId: number, rt: string) {
		const user = await this.usersService.findUserByID(userId)
		const dtoUser = new CreateTokenDto(user)
		if (!user || !user.refreshToken) throw new ForbiddenException('Access Denied')

		const rtMatches = await argon.verify(user.refreshToken, rt)
		if (!rtMatches) throw new ForbiddenException('Access Denied')

		const tokens = await this.tokenService.generateTokens({ ...dtoUser })
		await this.tokenService.saveToken(dtoUser.id, tokens.refreshToken)

		return { ...tokens, user: dtoUser }
	}

	async logout(userId: number) {
		await this.userRepository.update({
			refreshToken: null
		}, {
			where: {
				id: userId
			}
		})
	}

	private async validateUser(userDto: CreateUserDto) {
		const user = await this.usersService.getUserByEmail(userDto.email)
		const passwordEquals = await bcrypt.compare(userDto.password, user.password)
		if (user && passwordEquals) {
			return user
		}
		throw new UnauthorizedException({ message: 'Incorrect password or email!' })
	}
}
