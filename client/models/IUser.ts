import { IAddress } from './IAddress'

export interface IUser {
	id: number
	email: string
	phone: string
	name: string
	gender: string
	avatarPath: string
	addresses: IAddress[]
}

export interface setIUser {
	email: string
	password: string
}