import { Module } from '@nestjs/common'
import { DishController } from './dish.controller'
import { DishService } from './dish.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Dish } from './dish.model'
import { FilesModule } from '../files/files.module'
import { Type } from '../type/type.model'
import { DishInfo } from '../dish-info/dish-info.model'
import { BasketDish } from '../basket-dish/basket-dish.model'

@Module({
  controllers: [DishController],
  providers: [DishService],
  imports: [
    SequelizeModule.forFeature([Dish, Type, DishInfo, BasketDish]),
    FilesModule
  ]
})
export class DishModule {}
