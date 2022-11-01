import { Body, Controller, Delete, Get, Param, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common'
import { DishService } from './dish.service'
import { CreateDishDto } from './dto/create-dish.dto'
import { FileInterceptor } from '@nestjs/platform-express'
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
	getAll(
		@Query('typeId') typeId: number,
		@Query('name1') name1: string,
		@Query('limit') limit: number,
		@Query('page') page: number,
	) {
		return this.dishService.getAll(typeId, name1, limit, page)
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
