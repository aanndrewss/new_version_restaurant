import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { SequelizeModule } from '@nestjs/sequelize'
import { Basket } from './basket.model'
import { User } from '../users/users.model'
import { BasketDish } from '../basket-dish/basket-dish.model'

@Module({
  controllers: [BasketController],
  providers: [BasketService],
  imports: [
    SequelizeModule.forFeature([Basket, User, BasketDish])
  ]
})
export class BasketModule {}
