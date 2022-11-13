import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { SequelizeModule } from '@nestjs/sequelize'
import { Basket } from './basket.model'
import { User } from '../users/users.model'
import { BasketDish } from '../basket-dish/basket-dish.model'
import { BasketDishService } from '../basket-dish/basket-dish.service'

@Module({
  controllers: [BasketController],
  providers: [BasketService, BasketDishService],
  imports: [
    SequelizeModule.forFeature([Basket, User, BasketDish])
  ]
})
export class BasketModule {}
