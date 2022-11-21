import { CreateAddressDto } from '../addresses/dto/create-address.dto'

export class CreateTokenDto {

	readonly id: number
	readonly email: string
	readonly isActivated: boolean
	readonly name: string
	readonly phone: string
	readonly gender: string
	readonly avatarPath: string
	readonly addresses: CreateAddressDto

	constructor(model) {
		this.id = model.id
		this.isActivated = model.isActivated
		this.name = model.name
		this.email = model.email
		this.phone = model.phone
		this.gender = model.gender
		this.avatarPath = model.avatarPath
		this.addresses = model.addresses
	}
}