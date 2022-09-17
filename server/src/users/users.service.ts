import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './users.models'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {

	constructor(@InjectModel(User) private userRepository: typeof User) {
	}

	async createUser(dto: CreateUserDto) {

	}

	/*async updateUser(dto:) {

	}*/

	async getAllUsers() {
		const users = await this.userRepository.findAll()
		return users
	}

	async getUserByID(id: number) {
		const user = this.userRepository.findByPk(id)
		if (!user) throw new UnauthorizedException('User not found')
		return user
	}

	async getUserByEmail(email: string) {
		const user = this.userRepository.findOne({where: {email}})
		return user
	}

}
