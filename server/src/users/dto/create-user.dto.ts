import { IsEmail, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'


export class CreateUserDto {

	@ApiProperty({ example: 'user@mail.ru', description: 'Email' })
	@IsString({ message: 'Must be a string' })
	@IsEmail({}, { message: 'Incorrect email' })
	readonly email: string

	@ApiProperty({ example: '1241gfgfs', description: 'Password' })
	@IsString({ message: 'Must be a string' })
	@Length(4, 16, { message: 'Min 4 symbols, Max 16 symbols' })
	readonly password: string
}