import { IAddress } from './IAddress'
import { ICart } from './ICart'

export interface IOrder {
	id: number
	userId: number
	date: Date
	address: IAddress
	cart: ICart
}