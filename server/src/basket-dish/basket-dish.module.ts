import { Module } from '@nestjs/common';
import { BasketDishController } from './basket-dish.controller';
import { BasketDishService } from './basket-dish.service';
import { SequelizeModule } from '@nestjs/sequelize'
import { BasketDish } from './basket-dish.model'
import { Dish } from '../dish/dish.model'
import { Basket } from '../basket/basket.model'

@Module({
  controllers: [BasketDishController],
  providers: [BasketDishService],
  imports: [
    SequelizeModule.forFeature([BasketDish, Dish, Basket])
  ]
})
export class BasketDishModule {}
