import { Body, Controller, Get, Param, Post, Put, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { UsersService } from './users.service'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { User } from './users.model'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { JWTGuard } from '../auth/decorators/jwt-auth.guard'
import { AuthGuard } from '@nestjs/passport'
import { UpdateUserNameDto } from './dto/update-user-name.dto'
import { UpdateUserEmailDto } from './dto/update-user-email.dto'
import { UpdateUserPhoneDto } from './dto/update-user-phone.dto'
import { UpdateUserGenderDto } from './dto/update-user-gender.dto'

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
	@UseGuards(AuthGuard('jwt'))
	@Get()
	getAll() {
		return this.userService.getAllUsers()
	}

	@ApiOperation({ summary: 'Get one user by ID' })
	@ApiResponse({ status: 200, type: User })
	@UseGuards(AuthGuard('jwt'))
	@Get('/:id')
	getUserById(@Param('id') id: number) {
		return this.userService.getUserByID(id)
	}

	@Put('/:id')
	/*@UseGuards(AuthGuard('jwt'))*/
	@UseInterceptors(FileInterceptor('avatarPath'))
	updateProfile(@Param('id') id: number, @Body() dto: UpdateUserDto, @UploadedFile() avatarPath) {
		return this.userService.updateUser(dto, id, avatarPath)
	}

	@Put('name/:id')
	/*@UseGuards(AuthGuard('jwt'))*/
	updateProfileName(@Param('id') id: number, @Body() dto: UpdateUserNameDto) {
		return this.userService.updateUserName(dto, id)
	}

	@Put('email/:id')
	/*@UseGuards(AuthGuard('jwt'))*/
	updateProfileEmail(@Param('id') id: number, @Body() dto: UpdateUserEmailDto) {
		return this.userService.updateUserEmail(dto, id)
	}
	@Put('phone/:id')
	/*@UseGuards(AuthGuard('jwt'))*/
	updateProfilePhone(@Param('id') id: number, @Body() dto: UpdateUserPhoneDto) {
		return this.userService.updateUserPhone(dto, id)
	}
	@Put('gender/:id')
	/*@UseGuards(AuthGuard('jwt'))*/
	updateProfileGender(@Param('id') id: number, @Body() dto: UpdateUserGenderDto) {
		return this.userService.updateUserGender(dto, id)
	}
	@Put('avatar/:id')
	/*@UseGuards(AuthGuard('jwt'))*/
	@UseInterceptors(FileInterceptor('avatarPath'))
	updateProfileAvatar(@Param('id') id: number, @UploadedFile() avatarPath) {
		return this.userService.updateUserAvatar(avatarPath, id)
	}

}
