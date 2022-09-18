import { Column, HasMany, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { DataTypes } from 'sequelize'
import { Dish } from '../dish/dish.model'


interface TypeModelCreationAttrs {
	name: string
}

@Table({tableName: 'type'})
export class Type extends Model<Type, TypeModelCreationAttrs>{

	@ApiProperty({example: '1', description: 'Unique type ID'})
	@Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, unique: true})
	id: number

	@ApiProperty({example: 'Drinks', description: 'Name of type'})
	@Column({type: DataTypes.STRING, allowNull: false})
	name: string

	@HasMany(() => Dish)
	dishes: Dish[]
}