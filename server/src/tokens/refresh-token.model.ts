import { Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import { DataTypes } from 'sequelize'
import { User } from '../users/users.model'


@Table({ tableName: 'refresh_tokens' })
export class RefreshToken extends Model<RefreshToken> {

	@Column({ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, unique: true })
	id: number

	@ForeignKey(() => User)
	@Column({ type: DataTypes.INTEGER })
	userId: number

	@Column({type: DataTypes.STRING(1000)})
	refreshToken: string

}