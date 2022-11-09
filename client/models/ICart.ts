import { ICartItem } from './ICartItem'

export interface ICart {
	id: number
	userId: number
	totalPrice: number
	basketDishes: ICartItem[]
}