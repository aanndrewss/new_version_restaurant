import { Module } from '@nestjs/common';
import { AddressesController } from './addresses.controller';
import { AddressesService } from './addresses.service';
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from '../users/users.model'
import { Addresses } from './addresses.model'
import { UsersService } from '../users/users.service'
import { Basket } from '../basket/basket.model'
import { FilesService } from '../files/files.service'

@Module({
  controllers: [AddressesController],
  providers: [AddressesService, UsersService, FilesService],
  imports: [
    SequelizeModule.forFeature([User, Addresses, Basket])
  ]
})
export class AddressesModule {}
