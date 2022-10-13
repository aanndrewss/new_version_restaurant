import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './users.model'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { Basket } from '../basket/basket.model'
import { Addresses } from '../addresses/addresses.model'
import { FilesService } from '../files/files.service'

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
				phone: dto.phone
			},
			{
				where: {
					id: id
				}
			}
		)
		return user
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
		return user
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
