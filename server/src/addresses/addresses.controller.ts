import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { AddressesService } from './addresses.service'
import { CreateAddressDto } from './dto/create-address.dto'
import { UpdateAddressDto } from './dto/update-address.dto'

@Controller('address')
export class AddressesController {
	constructor(private addressesService: AddressesService) {
	}

	@Post('/create')
	createAddress(@Body() dto: CreateAddressDto) {
		return this.addressesService.createAddress(dto)
	}

	@Put('/update')
	updateAddress(@Body() dto: UpdateAddressDto) {
		return this.addressesService.updateAddress(dto)
	}

	@Delete('/delete')
	deleteAddress(@Body() dto: UpdateAddressDto) {
		return this.addressesService.deleteAddress(dto)
	}


}
