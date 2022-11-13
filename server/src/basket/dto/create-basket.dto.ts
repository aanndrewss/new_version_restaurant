import { AddDishDto } from '../../basket-dish/dto/add-dish.dto'

export class CreateBasketDto {
	readonly id: number
	readonly userId: number
	readonly basketDishes: AddDishDto[]
}