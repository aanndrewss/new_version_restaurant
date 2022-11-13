import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { DataTypes } from 'sequelize'
import { User } from '../users/users.model'
import { BasketDish } from '../basket-dish/basket-dish.model'


interface BasketCreationAttrs {
	userId: number
}

@Table({ tableName: 'basket' })
export class Basket extends Model<Basket, BasketCreationAttrs> {

	@ApiProperty({ example: '1', description: 'Unique ID of basket' })
	@Column({ type: DataTypes.INTEGER, autoIncrement: true, unique: true, primaryKey: true })
	id: number

	@ApiProperty({ example: '1', description: 'ID of user that have this basket' })
	@ForeignKey(() => User)
	@Column({ type: DataTypes.INTEGER })
	userId: number

	@HasMany(() => BasketDish, {as: 'items'})
	basketDishes: BasketDish[]

	@BelongsTo(() => User)
	user: User
}