import { Injectable } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Dish } from './dish.model'
import { FilesService } from '../files/files.service'

@Injectable()
export class DishService {

	constructor(@InjectModel(Dish) private dishRepository: typeof Dish,
							private fileService: FilesService) {
	}

	async create(dto: CreateDishDto, img: any) {
		const fileName = await this.fileService.createFile(img)
		const dish = await this.dishRepository.create({...dto, img: fileName})
		return dish
	}
}
