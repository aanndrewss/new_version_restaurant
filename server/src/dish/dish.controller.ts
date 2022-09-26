import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { DishService } from './dish.service'
import { CreateDishDto } from './dto/create-dish.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { GetDishDto } from './dto/get-dish.dto'
import { CreateDishInfoDto } from '../dish-info/create-dish-info.dto'

@Controller('dish')
export class DishController {

	constructor(private dishService: DishService) {
	}

	@Post()
	@UseInterceptors(FileInterceptor('img'))
	createDish(@Body() dto: CreateDishDto,
						 @UploadedFile() img, info: CreateDishInfoDto) {
		return this.dishService.create(dto, img, info)
	}

	@Get()
	getAll(@Body() dto: GetDishDto) {
		return this.dishService.getAll(dto)
	}

	@Get('/:id')
	getOne(@Param('id') id: number) {
		return this.dishService.getOne(id)
	}

	@Delete('/:id')
	deleteDish(@Param('id') id: number){
		return this.dishService.deleteDish(id)
	}


}
