/*
import { Injectable } from '@nestjs/common'
import { User } from '../users/users.model'
import { RefreshToken } from './refresh-token.model'


@Injectable()
export class RefreshTokensRepository {

	async createRefreshToken (user: User, ttl: number): Promise<RefreshToken> {

		const token = new RefreshToken()

		token.userId = user.id
		token.is_revoked = false

		const expiration = new Date()
		expiration.setTime(expiration.getTime() + ttl)

		token.expires = expiration

		return token.save()
	}

	async findTokenById (id: number): Promise<RefreshToken | null> {
		return RefreshToken.findOne({
			where: {
				id
			}
		})
	}
}*/
