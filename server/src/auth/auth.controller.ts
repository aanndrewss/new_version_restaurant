import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common'
import { AuthService } from './auth.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { ValidationPipe } from '../pipes/validation.pipe'

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

	@Get('/refresh')
	refresh() {

	}

	@Post('/logout')
	logout() {

	}
}
