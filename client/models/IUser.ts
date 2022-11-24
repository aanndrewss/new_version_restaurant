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
	orders: IOrder[]
}

export interface setIUser {
	email: string
	password: string
}