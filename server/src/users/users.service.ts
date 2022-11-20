import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './users.model'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { Basket } from '../basket/basket.model'
import { Addresses } from '../addresses/addresses.model'
import { FilesService } from '../files/files.service'
import { CreateTokenDto } from '../tokens/create-token.dto'
import { UpdateUserNameDto } from './dto/update-user-name.dto'
import { UpdateUserEmailDto } from './dto/update-user-email.dto'
import { UpdateUserPhoneDto } from './dto/update-user-phone.dto'
import { UpdateUserGenderDto } from './dto/update-user-gender.dto'
import { UpdateUserAvatarDto } from './dto/update-user-avatar.dto'

@Injectable()
export class UsersService {

	constructor(@InjectModel(User) private userRepository: typeof User,
							@InjectModel(Basket) private basketRepository: typeof Basket,
							private fileService: FilesService) {
	}

	async createUser(dto: CreateUserDto) {
		const user = await this.userRepository.create(dto)
		const basket = await this.basketRepository.create({ userId: user.id })
		return user
	}

	async updateUser(dto: UpdateUserDto, id: number, avatarPath: any) {
		const fileName = await this.fileService.createFile(avatarPath)
		const user = await this.userRepository.update(
			{
				email: dto.email,
				password: dto.password,
				gender: dto.gender,
				avatarPath: fileName,
				phone: dto.phone,
				name: dto.name
			},
			{
				where: {
					id: id
				}
			}
		)
		return user
	}

	async updateUserName(dto: UpdateUserNameDto) {
		await this.userRepository.update({
			name: dto.name
		},
			{
				where: {
					id: dto.id
				}
			}
		)
		return this.getUserByID(dto.id)
	}
	async updateUserEmail(dto: UpdateUserEmailDto) {
		await this.userRepository.update({
				email: dto.email
			},
			{
				where: {
					id: dto.id
				}
			}
		)
		return this.getUserByID(dto.id)
	}
	async updateUserPhone(dto: UpdateUserPhoneDto) {
		await this.userRepository.update({
				phone: dto.phone
			},
			{
				where: {
					id: dto.id
				}
			}
		)
		return this.getUserByID(dto.id)
	}
	async updateUserGender(dto: UpdateUserGenderDto) {
		await this.userRepository.update({
				gender: dto.gender
			},
			{
				where: {
					id: dto.id
				}
			}
		)
		return this.getUserByID(dto.id)
	}
	async updateUserAvatar(avatarPath: any, dto: UpdateUserAvatarDto) {
		const fileName = await this.fileService.createFile(avatarPath)
		await this.userRepository.update({
				avatarPath: fileName
			},
			{
				where: {
					id: dto.id
				}
			}
		)
		return this.getUserByID(dto.id)
	}


	async getAllUsers() {
		const users = await this.userRepository.findAll()
		return users
	}

	async getUserByID(id: number) {
		const user = await this.userRepository.findOne({
			where: { id },
			include: [{ model: Addresses, as: 'addresses' }]
		})
		if (!user) throw new UnauthorizedException('User not found')
		const dtoUser = new CreateTokenDto(user)
		return {user: dtoUser}
	}

	async findUserByID(id: number) {
		const user = await this.userRepository.findOne({
			where: {id}
		})
		if (!user) throw new UnauthorizedException('User not found')
		return user
	}

	async getUserByEmail(email: string) {
		const user = await this.userRepository.findOne({ where: { email } })
		return user
	}

}
