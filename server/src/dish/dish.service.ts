import { Injectable } from '@nestjs/common'
import { CreateDishDto } from './dto/create-dish.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Dish } from './dish.model'
import { FilesService } from '../files/files.service'
import { Op } from 'sequelize'
import { DishInfo } from '../dish-info/dish-info.model'
import { CreateDishInfoDto } from '../dish-info/create-dish-info.dto'

@Injectable()
export class DishService {

	constructor(@InjectModel(Dish) private dishRepository: typeof Dish,
							private fileService: FilesService, @InjectModel(DishInfo) private dishInfoRepository: typeof DishInfo) {
	}

	async create(dto: CreateDishDto, img: any, info: CreateDishInfoDto) {
		const fileName = await this.fileService.createFile(img)
		const dish = await this.dishRepository.create({ ...dto, img: fileName })


		return dish
	}

	async getAll(typeId, name1, limit, page) {
		page = page || 1
		limit = limit || 9
		let offset = page * limit - limit
		let dishes
		if (!typeId && !name1) {
			dishes = await this.dishRepository.findAndCountAll({ limit, offset })
		} else if (!typeId) {
			dishes = await this.dishRepository.findAndCountAll({
				where: {
					name: {
						[Op.like]: '%' + name1 + '%'
					}
				}, limit, offset
			})
		} else if (!name1) {
			dishes = await this.dishRepository.findAndCountAll({ where: { typeId: typeId }, limit, offset })
		} else {
			dishes = await this.dishRepository.findAndCountAll({
				where: {
					typeId: typeId, name: {
						name: {
							[Op.like]: '%' + name1 + '%'
						}, limit, offset
					}
				}
			})
		}
		return dishes
	}

	async getOne(id: number) {
		const dish = await this.dishRepository.findOne({ where: { id }, include: [{ model: DishInfo, as: 'info' }] })
		return dish
	}

	async deleteDish(id: number) {
		await this.dishRepository.destroy({
			where: {
				id: id
			}
		})
	}
}
