import { Injectable } from '@nestjs/common'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {

	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.SECRET_KEY_REFRESH_TOKEN,
			passReqToCallback: true
		})
	}

	async validate(req: Request, payload: any) {
		const refreshToken = req.get('authorization').replace('Bearer', '').trim()
		return {
			...payload,
			refreshToken
		}
	}
}