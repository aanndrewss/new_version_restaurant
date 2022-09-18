import { Module } from '@nestjs/common'
import { DishController } from './dish.controller'
import { DishService } from './dish.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Dish } from './dish.model'

@Module({
  controllers: [DishController],
  providers: [DishService],
  imports: [
    SequelizeModule.forFeature([Dish])
  ]
})
export class DishModule {}
