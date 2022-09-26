import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { AddressesService } from './addresses.service'
import { CreateAddressDto } from './dto/create-address.dto'

@Controller()
export class AddressesController {
	constructor(private addressesService: AddressesService) {
	}

	@Post('/:id')
	createAddress(@Param('id') id: number, @Body() dto: CreateAddressDto) {
		return this.addressesService.createAddress(dto, id)
	}

	@Put('/:id')
	updateAddress(@Param('id') id: number, @Body() dto: CreateAddressDto) {
		return this.addressesService.updateAddress(dto, id)
	}

	@Delete('/:id')
	deleteAddress(@Param('id') id: number) {
		return this.addressesService.deleteAddress(id)
	}


}
