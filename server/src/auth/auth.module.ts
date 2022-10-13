import { forwardRef, Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { JwtModule } from '@nestjs/jwt'
import { TokenService } from '../tokens/token.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { RefreshToken } from '../tokens/refresh-token.model'
import { JWTGuard } from './decorators/jwt-auth.guard'
import { AtStrategy } from './strategies/at.strategy'
import { RtStrategy } from './strategies/rt.strategy'
import { User } from '../users/users.model'

@Module({
	controllers: [AuthController],
	providers: [AuthService, TokenService, JWTGuard, AtStrategy, RtStrategy, RefreshToken, User ],
	imports: [
		SequelizeModule.forFeature([
			RefreshToken,
			User
		]),
		forwardRef(() => UsersModule),
		JwtModule.register({})
	],
	exports: [
		AuthService,
		JwtModule
	]
})
export class AuthModule {
}
