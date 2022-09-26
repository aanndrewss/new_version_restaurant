import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { DataTypes } from 'sequelize'
import { Type } from '../type/type.model'
import { DishInfo } from '../dish-info/dish-info.model'

interface DishCreationsAttrs {
	name: string
	grams: number
	price: number
	typeId: number
	img: string
}


@Table({ tableName: 'dish' })
export class Dish extends Model<Dish, DishCreationsAttrs> {

	@ApiProperty({ example: '1', description: 'Unique dish ID' })
	@Column({ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, unique: true })
	id: number

	@ApiProperty({ example: 'Czesar', description: 'Name dish' })
	@Column({ type: DataTypes.STRING, allowNull: false })
	name: string

	@ApiProperty({ example: '300', description: 'Grams of dish' })
	@Column({ type: DataTypes.INTEGER, allowNull: false })
	grams: number

	@ApiProperty({ example: '500', description: 'Price of dish' })
	@Column({ type: DataTypes.INTEGER, allowNull: false })
	price: number

	@ApiProperty({ example: 'img', description: 'Image of dish' })
	@Column({ type: DataTypes.STRING, allowNull: false })
	img: string

	@ApiProperty({ example: '2', description: 'Type ID' })
	@ForeignKey(() => Type)
	@Column({ type: DataTypes.INTEGER })
	typeId: number

	@HasMany(() => DishInfo)
	dishInfo: DishInfo[]

	@BelongsTo(() => Type)
	type: Type
}