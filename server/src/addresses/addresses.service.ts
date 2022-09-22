import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Addresses } from './addresses.model'
import { CreateAddressDto } from './dto/create-address.dto'

@Injectable()
export class AddressesService {
	constructor(@InjectModel(Addresses) private addressesRepository: typeof Addresses) {
	}

	async createAddress(dto: CreateAddressDto, id: number) {
		const addresses = await this.addressesRepository.create({ ...dto, userId: id })
		return addresses
	}

	async updateAddress(dto: CreateAddressDto, id: number) {
		const addresses = await this.addressesRepository.update({
				city: dto.city,
				street: dto.street,
				home: dto.home
			},
			{
				where: {
					userId: id
				}
			}
		)
		return addresses
	}

	async deleteAddress(id: number) {
		await this.addressesRepository.destroy({
			where: {
				id: id
			}
		})
	}

}
