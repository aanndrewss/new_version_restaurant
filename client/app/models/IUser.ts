import { IAddress } from './IAddress'
import { IOrder } from './IOrder'

export interface IUser {
	id: number
	email: string
	phone: string
	name: string
	gender: string
	avatarPath: string
	addresses: IAddress[]
}

export interface loginIUser {
	email: string
	password: string
}

export interface createIUser {
	name: string
	phone: string
	gender: string
	email: string
	password: string
}