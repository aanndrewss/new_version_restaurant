import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { DishService } from './dish.service'
import { CreateDishDto } from './dto/create-dish.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { GetDishDto } from './dto/get-dish.dto'

@Controller('dish')
export class DishController {

	constructor(private dishService: DishService) {
	}

	@Post()
	@UseInterceptors(FileInterceptor('img'))
	createDish(@Body() dto: CreateDishDto,
						 @UploadedFile() img) {
		return this.dishService.create(dto, img)
	}

	@Get()
	getAll(@Body() dto: GetDishDto) {
		return this.dishService.getAll(dto)
	}

	@Get('/:id')
	getOne(@Param('id') id: string) {
		return this.dishService.getOne(id)
	}

}
