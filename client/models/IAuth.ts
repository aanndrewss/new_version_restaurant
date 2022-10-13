import { IUser } from './IUser'

export interface IAuth {
	access_token: string
	refresh_token: string
	user: IUser
}