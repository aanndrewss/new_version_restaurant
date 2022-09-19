import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { DishService } from './dish.service'
import { CreateDishDto } from './dto/create-dish.dto'
import { FileInterceptor } from '@nestjs/platform-express'

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

}
