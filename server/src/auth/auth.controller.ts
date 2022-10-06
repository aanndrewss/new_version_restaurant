import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common'
import { AuthService } from './auth.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { ValidationPipe } from '../pipes/validation.pipe'
import { RefreshTokenDto } from '../tokens/refresh-token.dto'

@ApiTags('Registration')
@Controller('auth')
export class AuthController {

	constructor(private authService: AuthService) {
	}

	@Post('/login')
	@UsePipes(ValidationPipe)
	login(@Body() userDto: CreateUserDto) {
		return this.authService.login(userDto)
	}

	@Post('/registration')
	@UsePipes(ValidationPipe)
	registration(@Body() userDto: CreateUserDto) {
		return this.authService.registration(userDto)
	}

	@Post('/refresh')
	refresh(@Body() tokenDto: RefreshTokenDto) {
		return this.refresh(tokenDto)
	}

	@Post('/logout')
	logout() {

	}
}
