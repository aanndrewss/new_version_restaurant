import { Body, Controller, Delete, Param, Post } from '@nestjs/common'
import { TypeService } from './type.service'
import { CreateTypeDto } from './dto/create-type.dto'

@Controller('type')
export class TypeController {

	constructor(private typeService: TypeService) {
	}

	@Post()
	createType(@Body() dto: CreateTypeDto) {
		return this.typeService.createType(dto)
	}

	@Delete('/:id')
	deleteType(@Param('id') id: number) {
		return this.typeService.deleteType(id)
	}

}
