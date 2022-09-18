import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './users.model'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {

	constructor(@InjectModel(User) private userRepository: typeof User) {
	}

	async createUser(dto: CreateUserDto) {
		const user = await this.userRepository.create(dto)
		return user
	}

	/*async updateUser(dto: UpdateUserDto) {

	}*/

	async getAllUsers() {
		const users = await this.userRepository.findAll()
		return users
	}

	async getUserByID(id: number) {
		const user = await this.userRepository.findByPk(id)
		if (!user) throw new UnauthorizedException('User not found')
		return user
	}

	async getUserByEmail(email: string) {
		const user = await this.userRepository.findOne({where: {email}})
		return user
	}

}
