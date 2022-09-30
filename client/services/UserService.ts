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
		setUser: build.mutation<setIUser, setIUser>({
			query: (user) => ({
				url: '/registration',
				method: 'POST',
				body: user
			}),
			invalidatesTags: ['user']
		})
	})
})