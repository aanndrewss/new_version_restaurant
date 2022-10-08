import { forwardRef, Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { JwtModule } from '@nestjs/jwt'
import { TokenService } from '../tokens/token.service'
import { RefreshTokensRepository } from '../tokens/refresh-tokens.repository'
import { SequelizeModule } from '@nestjs/sequelize'
import { RefreshToken } from '../tokens/refresh-token.model'

@Module({
	controllers: [AuthController],
	providers: [AuthService, TokenService, RefreshTokensRepository],
	imports: [
		SequelizeModule.forFeature([
			RefreshToken,
		]),
		forwardRef(() => UsersModule),
		JwtModule.register({
			secret: process.env.SECRET_KEY || 'secret',
			signOptions: {
				expiresIn: '5m'
			}
		})
	],
	exports: [
		AuthService,
		JwtModule
	]
})
export class AuthModule {
}
