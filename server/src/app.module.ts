import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { SequelizeModule } from '@nestjs/sequelize'
import { ConfigModule } from '@nestjs/config'
import { User } from './users/users.model'
import { DishModule } from './dish/dish.module'
import { Dish } from './dish/dish.model'
import { TypeModule } from './type/type.module'
import { Type } from './type/type.model'
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'

@Module({
	controllers: [],
	providers: [],
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.${process.env.NODE_ENV}.env`
		}),
		ServeStaticModule.forRoot({
			rootPath: path.resolve(__dirname, 'static')
		}),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: process.env.POSTGRES_HOST,
			port: Number(process.env.POSTGRES_PORT),
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
			models: [User, Dish, Type],
			autoLoadModels: true
		}),
		AuthModule,
		UsersModule,
		DishModule,
		TypeModule,
		FilesModule
	],

})
export class AppModule {
}
