import { Column, HasMany, Model, Table } from 'sequelize-typescript'
import { DataTypes } from 'sequelize'
import { ApiProperty } from '@nestjs/swagger'
import { Addresses } from '../addresses/addresses.model'

type genderStatus = 'Male' | 'Female'

interface UserCreationsAttrs {
	email: string;
	password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationsAttrs> {

	@ApiProperty({ example: '1', description: 'User unique ID' })
	@Column({ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, unique: true })
	id: number

	@Column({ type: DataTypes.STRING, unique: true, allowNull: false })
	email: string

	@Column({ type: DataTypes.STRING, allowNull: false })
	password: string

	@Column({ type: DataTypes.STRING, allowNull: true })
	avatarPath: string

	@Column({ type: DataTypes.STRING, allowNull: true })
	gender: string

	@Column({ type: DataTypes.STRING, allowNull: true })
	phone: string

	@Column({ type: DataTypes.BOOLEAN, defaultValue: false })
	isActivated: boolean

	@Column({type: DataTypes.STRING(1000), allowNull: true})
	refreshToken: string

	@HasMany(() => Addresses)
	addresses: Addresses[]

}
