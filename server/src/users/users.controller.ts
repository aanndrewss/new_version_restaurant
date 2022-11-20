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
import { UpdateUserAvatarDto } from './dto/update-user-avatar.dto'



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

	@Put('update/name')
	/*@UseGuards(AuthGuard('jwt'))*/
	updateProfileName(@Body() dto: UpdateUserNameDto) {
		return this.userService.updateUserName(dto)
	}

	@Put('update/email')
	/*@UseGuards(AuthGuard('jwt'))*/
	updateProfileEmail(@Body() dto: UpdateUserEmailDto) {
		return this.userService.updateUserEmail(dto)
	}
	@Put('update/phone')
	/*@UseGuards(AuthGuard('jwt'))*/
	updateProfilePhone(@Body() dto: UpdateUserPhoneDto) {
		return this.userService.updateUserPhone(dto)
	}
	@Put('update/gender')
	/*@UseGuards(AuthGuard('jwt'))*/
	updateProfileGender(@Body() dto: UpdateUserGenderDto) {
		return this.userService.updateUserGender(dto)
	}
	@Put('update/avatar')
	/*@UseGuards(AuthGuard('jwt'))*/
	@UseInterceptors(FileInterceptor('avatarPath'))
	updateProfileAvatar(@UploadedFile() avatarPath, @Body() dto: UpdateUserAvatarDto) {
		return this.userService.updateUserAvatar(avatarPath, dto)
	}

}
