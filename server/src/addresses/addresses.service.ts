import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Addresses } from './addresses.model'
import { CreateAddressDto } from './dto/create-address.dto'
import { UpdateAddressDto } from './dto/update-address.dto'

@Injectable()
export class AddressesService {
	constructor(@InjectModel(Addresses) private addressesRepository: typeof Addresses) {
	}

	async createAddress(dto: CreateAddressDto) {
		const addresses = await this.addressesRepository.create({ ...dto, userId: dto.userId })
		return addresses
	}

	async updateAddress(dto: UpdateAddressDto) {
		const addresses = await this.addressesRepository.update({
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
		return addresses
	}

	async deleteAddress(dto: UpdateAddressDto) {
		await this.addressesRepository.destroy({
			where: {
				userId: dto.userId,
				id: dto.id
			}
		})
	}

}
