import { Body, Controller, Get, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { User } from './users.models'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {
	}

	@ApiOperation({summary: 'Create user'})
	@ApiResponse({status: 200, type: User})
	@Post()
	create(@Body() userDto: CreateUserDto) {
		return this.userService.createUser(userDto)
	}

	@ApiOperation({summary: 'Get all users'})
	@ApiResponse({status: 200, type: [User]})
	@Get()
	getAll() {
		return this.userService.getAllUsers()
	}


}
