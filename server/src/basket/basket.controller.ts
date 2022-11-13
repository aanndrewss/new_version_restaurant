import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { BasketService } from './basket.service'
import { CreateBasketDto } from './dto/create-basket.dto'
import { AddDishDto } from '../basket-dish/dto/add-dish.dto'

@Controller('basket')
export class BasketController {

	constructor(private basketService: BasketService) {
	}

	@Get('/:id')
	getBasket(@Param('id') id: number){
		return this.basketService.fetchBasket(id)
	}

	@Post('/add')
	addItem(@Body() dto: AddDishDto) {
		return this.basketService.addBasketItem(dto)
	}

	@Put('/minus')
	minusItem(@Body() dto: AddDishDto) {
		return this.basketService.removeBasketItem(dto)
	}

	@Delete('/delete')
	removeItem(@Body() dto: AddDishDto) {
		return this.basketService.deleteBasketItem(dto)
	}

	@Delete('/clear')
	clearItems(@Body() dto: AddDishDto) {
		return this.basketService.clearBasketItems(dto)
	}
}
