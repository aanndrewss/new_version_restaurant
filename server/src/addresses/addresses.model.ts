import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { DataTypes } from 'sequelize'
import { User } from '../users/users.model'


interface AddressesCreationAttrs {
	city: string
	street: string
	home: number
	userId: number
}

@Table({tableName: 'addresses'})
export class Addresses extends Model<Addresses, AddressesCreationAttrs> {

	@ApiProperty({example: '1', description: 'unique address ID'})
	@Column({type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true})
	id: number

	@ApiProperty({example: 'Moscow', description: 'User city'})
	@Column({type: DataTypes.STRING})
	city: string

	@ApiProperty({example: 'Lenina', description: 'User street'})
	@Column({type: DataTypes.STRING})
	street: string

	@ApiProperty({example: '121', description: 'User home'})
	@Column({type: DataTypes.INTEGER})
	home: number

	@ApiProperty({example: '12', description: 'user ID'})
	@ForeignKey(() => User)
	@Column({type: DataTypes.INTEGER})
	userId: number

	@BelongsTo(() => User)
	user: User
}