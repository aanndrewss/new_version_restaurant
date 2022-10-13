import { Injectable } from '@nestjs/common'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { CreateTokenDto } from '../../tokens/create-token.dto'

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {

	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.SECRET_KEY_ACCESS_TOKEN,

		})
	}

	async validate(payload: CreateTokenDto) {
		return payload
	}
}