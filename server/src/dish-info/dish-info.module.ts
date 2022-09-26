import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Dish } from '../dish/dish.model'
import { DishInfo } from './dish-info.model'


@Module({
	controllers: [],
	providers: [],
	imports: [
		SequelizeModule.forFeature([Dish, DishInfo])
	]
})

export class DishInfoModule {
}