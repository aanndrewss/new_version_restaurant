import { Module } from '@nestjs/common';
import { AddressesController } from './addresses.controller';
import { AddressesService } from './addresses.service';
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from '../users/users.model'
import { Addresses } from './addresses.model'

@Module({
  controllers: [AddressesController],
  providers: [AddressesService],
  imports: [
    SequelizeModule.forFeature([User, Addresses])
  ]
})
export class AddressesModule {}
