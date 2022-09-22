import { Injectable } from '@nestjs/common'
import { CreateDishDto } from './dto/create-dish.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Dish } from './dish.model'
import { FilesService } from '../files/files.service'
import { GetDishDto } from './dto/get-dish.dto'
import { Op } from 'sequelize'

@Injectable()
export class DishService {

	constructor(@InjectModel(Dish) private dishRepository: typeof Dish,
							private fileService: FilesService) {
	}

	async create(dto: CreateDishDto, img: any) {
		const fileName = await this.fileService.createFile(img)
		const dish = await this.dishRepository.create({ ...dto, img: fileName })
		return dish
	}

	async getAll(dto: GetDishDto) {
		let page = dto.page || 1
		let limit = dto.limit || 9
		let offset = page * limit - limit
		let dishes
		if (!dto.typeId && !dto.name1) {
			dishes = await this.dishRepository.findAndCountAll({ limit, offset })
		} else if (!dto.typeId) {
			dishes = await this.dishRepository.findAndCountAll({
				where: {
					name: {
						[Op.like]: '%' + dto.name1 + '%'
					}
				}, limit, offset
			})
		} else if (dto.name1) {
			dishes = await this.dishRepository.findAndCountAll({ where: { typeId: dto.typeId }, limit, offset })
		} else {
			dishes = await this.dishRepository.findAndCountAll({
				where: {
					typeId: dto.typeId, name: {
						name: {
							[Op.like]: '%' + dto.name1 + '%'
						}, limit, offset
					}
				}
			})
		}
		return dishes
	}

	async getOne(id: string) {
		const dish = await this.dishRepository.findOne({ where: { id } })
		return dish
	}
}
