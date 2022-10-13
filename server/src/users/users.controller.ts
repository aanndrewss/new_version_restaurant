import { Body, Controller, Get, Param, Post, Put, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { UsersService } from './users.service'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { User } from './users.model'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { JWTGuard } from '../auth/decorators/jwt-auth.guard'

@Controller('users')
export class UsersController {
	constructor(private userService: UsersService) {
	}

	@ApiOperation({ summary: 'Create user' })
	@ApiResponse({ status: 200, type: User })
	@Post()
	create(@Body() userDto: CreateUserDto) {
		return this.userService.createUser(userDto)
	}

	@ApiOperation({ summary: 'Get all users' })
	@ApiResponse({ status: 200, type: [User] })
	/*@UseGuards(JWTGuard)*/
	@Get()
	getAll(@Req() request) {
		return this.userService.getAllUsers()
	}

	@ApiOperation({ summary: 'Get one user by ID' })
	@ApiResponse({ status: 200, type: User })
	@UseGuards(JWTGuard)
	@Get('/:id')
	getUserById(@Param('id') id: number) {
		return this.userService.getUserByID(id)
	}

	@Put('/:id')
	@UseGuards(JWTGuard)
	@UseInterceptors(FileInterceptor('avatarPath'))
	updateProfile(@Param('id') id: number, @Body() dto: UpdateUserDto, @UploadedFile() avatarPath) {
		return this.userService.updateUser(dto, id, avatarPath)
	}

}
