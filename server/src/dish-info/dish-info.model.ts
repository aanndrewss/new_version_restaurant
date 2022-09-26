import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { DataTypes } from 'sequelize'
import { Dish } from '../dish/dish.model'


interface DishInfoCreationAttrs {
	title: string
	description: string
	dishId: number
}

@Table({ tableName: 'dish-info' })
export class DishInfo extends Model<DishInfo, DishInfoCreationAttrs> {


	@ApiProperty({ example: '1', description: 'dish info unique ID' })
	@Column({ type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
	id: number

	@ApiProperty({ example: 'Ingridients', description: 'Dish info title' })
	@Column({ type: DataTypes.STRING, allowNull: false })
	title: string

	@ApiProperty({ example: 'JSON array', description: 'Dish info' })
	@Column({ type: DataTypes.STRING })
	description: string

	@ApiProperty({ example: '2', description: 'Dish ID' })
	@ForeignKey(() => Dish)
	@Column({ type: DataTypes.INTEGER })
	dishId: number

	@BelongsTo(() => Dish)
	dish: Dish
}