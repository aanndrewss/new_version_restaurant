import { ForbiddenException, Injectable } from '@nestjs/common'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {

	constructor() {
		super({
			ignoreExpiration: true,
			jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
				return request?.cookies['refreshToken']
			}]),
			secretOrKey: process.env.SECRET_KEY_REFRESH_TOKEN,
			passReqToCallback: true
		})
	}

	async validate(req: Request, payload: any) {
		const refreshToken = req.cookies?.Refresh
		return {
			...payload,
			refreshToken
		}
	}
}