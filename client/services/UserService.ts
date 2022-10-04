import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser, setIUser } from '../models/IUser'


export const userAPI = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
	tagTypes: ['user'],
	endpoints: (build) => ({
		fetchUser: build.query<IUser, any>({
			query: () => ({
				url: '/:id'
			})
		}),
		fetchUsers: build.query<IUser[], any>({
			query: () => ({
				url: '/users'
			}),
			providesTags: result => ['user']
		}),
		setRegistration: build.mutation<setIUser, setIUser>({
			query: (user) => ({
				url: '/auth/registration',
				method: 'POST',
				body: user
			}),
			invalidatesTags: ['user']
		}),
		setLogin: build.mutation<setIUser, setIUser>({
			query: (user) => ({
				url: '/auth/login',
				method: 'POST',
				body: user
			}),
			invalidatesTags: ['user']
		})
	})
})