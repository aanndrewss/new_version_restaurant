import { IDish } from './IDish'

export interface ICartItem {
	id: number
	basketId: number
	dishId: number
	count: number
	cartDish: IDish[]
}