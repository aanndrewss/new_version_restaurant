import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Addresses } from './addresses.model'
import { CreateAddressDto } from './dto/create-address.dto'
import { UpdateAddressDto } from './dto/update-address.dto'
import { UsersService } from '../users/users.service'

@Injectable()
export class AddressesService {
	constructor(@InjectModel(Addresses) private addressesRepository: typeof Addresses,
							private userService: UsersService) {
	}

	async createAddress(dto: CreateAddressDto) {
		await this.addressesRepository.create({ ...dto, userId: dto.userId })
		return await this.userService.getUserByID(dto.userId)
	}

	async updateAddress(dto: UpdateAddressDto) {
		await this.addressesRepository.update({
				city: dto.city,
				street: dto.street,
				home: dto.home
			},
			{
				where: {
					userId: dto.userId,
					id: dto.id
				}
			}
		)
		return await this.userService.getUserByID(dto.userId)
	}

	async deleteAddress(dto: UpdateAddressDto) {
		await this.addressesRepository.destroy({
			where: {
				userId: dto.userId,
				id: dto.id
			}
		})
		return await this.userService.getUserByID(dto.userId)
	}

}
