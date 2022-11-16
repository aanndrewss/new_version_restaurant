export class CreateTokenDto {

	readonly id: number
	readonly email: string
	readonly isActivated: boolean
	readonly name: string
	readonly phone: string
	readonly gender: string
	readonly avatarPath: string

	constructor(model) {
		this.id = model.id
		this.isActivated = model.isActivated
		this.name = model.name
		this.email = model.email
		this.phone = model.phone
		this.gender = model.gender
		this.avatarPath = model.avatarPath
	}
}