import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Basket } from './basket.model'
import { BasketDish } from '../basket-dish/basket-dish.model'
import { CreateBasketDto } from './dto/create-basket.dto'
import { AddDishDto } from '../basket-dish/dto/add-dish.dto'
import { Dish } from '../dish/dish.model'

@Injectable()
export class BasketService {

	constructor(@InjectModel(Basket) private basketRepository: typeof Basket,
							@InjectModel(BasketDish) private basketDishRepository: typeof BasketDish) {
	}

	async fetchBasket(id: number) {
		const basket = await this.basketRepository.findOne({
			where: { id: id },
			include: [{ model: BasketDish, as: 'items', include: [{ model: Dish, as: 'cartDish' }] }],
			order:[['items', 'createdAt', 'ASC']]
		})
		return basket
	}

	async addBasketItem(dto: AddDishDto) {
		const basketItem = await this.basketDishRepository.findOne({
			where: {
				dishId: dto.dishId,
				basketId: dto.basketId
			}
		})

		if (!basketItem) {
			await this.basketDishRepository.create({ ...dto, basketId: dto.basketId, count: 1 })
		} else {
			await this.basketDishRepository.update({ count: basketItem.count + 1 }, {
				where: {
					basketId: dto.basketId,
					dishId: dto.dishId
				}
			})
		}
		const basket = await this.basketRepository.findOne({
			where: { id: dto.basketId },
			include: [{ model: BasketDish, as: 'items', include: [{ model: Dish, as: 'cartDish' }] }],
			order:[['items', 'createdAt', 'ASC']]
		})
		return basket
	}

	async removeBasketItem(dto: AddDishDto) {
		const basketItem = await this.basketDishRepository.findOne({
			where: {
				dishId: dto.dishId,
				basketId: dto.basketId
			}
		})

		if (basketItem) {
			await this.basketDishRepository.update({ count: basketItem.count - 1 }, {
				where: {
					basketId: dto.basketId,
					dishId: dto.dishId
				}
			})
		}

		const basket = await this.basketRepository.findOne({
			where: { id: dto.basketId },
			include: [{ model: BasketDish, as: 'items', include: [{ model: Dish, as: 'cartDish' }] }],
			order:[['items', 'createdAt', 'ASC']]
		})
		return basket
	}

	async deleteBasketItem(dto: AddDishDto) {
		const basketItem = await this.basketDishRepository.findOne({
			where: {
				dishId: dto.dishId,
				basketId: dto.basketId
			}
		})

		if (basketItem) {
			await this.basketDishRepository.destroy({ where: { basketId: dto.basketId, dishId: dto.dishId } })
		}
		const basket = await this.basketRepository.findOne({
			where: { id: dto.basketId },
			include: [{ model: BasketDish, as: 'items', include: [{ model: Dish, as: 'cartDish' }] }],
			order:[['items', 'createdAt', 'ASC']]
		})
		return basket
	}

	async clearBasketItems(dto: AddDishDto) {
		await this.basketDishRepository.destroy({ where: { basketId: dto.basketId } })
	}
}
