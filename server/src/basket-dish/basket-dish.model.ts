import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import { DataTypes } from 'sequelize'
import { Basket } from '../basket/basket.model'
import { Dish } from '../dish/dish.model'


interface BasketDishCreationAttrs {
	dishId: number
	count: number
	basketId: number
}

@Table({ tableName: 'basket-dish' })
export class BasketDish extends Model<BasketDish, BasketDishCreationAttrs> {

	@Column({ type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
	id: number

	@ForeignKey(() => Basket)
	@Column({ type: DataTypes.INTEGER })
	basketId: number

	@Column({type: DataTypes.INTEGER})
	count: number

	@ForeignKey(() => Dish)
	@Column({type: DataTypes.INTEGER})
	dishId: number

	@BelongsTo(() => Dish)
	cartDish: Dish

	@BelongsTo(() => Basket)
	basket: Basket

}