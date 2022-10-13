import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards, UsePipes } from '@nestjs/common'
import { AuthService } from './auth.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { ValidationPipe } from '../pipes/validation.pipe'
import { RefreshTokenDto } from '../tokens/refresh-token.dto'
import { AuthGuard } from '@nestjs/passport'
import { Request, Response } from 'express'

@ApiTags('Registration')
@Controller('auth')
export class AuthController {

	constructor(private authService: AuthService) {
	}

	@Post('/login')
	@UsePipes(ValidationPipe)
	async login(@Body() userDto: CreateUserDto, @Res({ passthrough: true }) res: Response) {
		const userData = await this.authService.login(userDto)
		res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
		return userData
	}

	@Post('/registration')
	@UsePipes(ValidationPipe)
	async registration(@Body() userDto: CreateUserDto, @Res({ passthrough: true }) res: Response) {
		const userData = await this.authService.registration(userDto)
		res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
		return userData
	}

	@UseGuards(AuthGuard('jwt-refresh'))
	@Post('/refresh')
	async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
		const user = req.user
		const { refreshToken } = req.cookies
		const userData = await this.authService.refresh(user['id'], refreshToken)
		res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
		return userData
	}

	@UseGuards(AuthGuard('jwt'))
	@Post('/logout')
	@HttpCode(HttpStatus.OK)
	logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
		const user = req.user
		res.clearCookie('refreshToken')
		return this.authService.logout(user['id'])
	}
}
