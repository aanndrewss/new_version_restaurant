import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser, setIUser } from '../models/IUser'
import { RootState } from '../store/store'
import { IAuth } from '../models/IAuth'
import { setIsAuth, setUser } from '../store/reducers/UserSlice'


export const userAPI = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5000',
		prepareHeaders: (headers) => {
			headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
			return headers;
		},
		credentials: 'include'
	}),
	tagTypes: ['user'],
	endpoints: (build) => ({
		fetchUser: build.query<IUser, number>({
			query: (id: number) => ({
				url: `/users/${id}`
			}),
			providesTags: result => ['user']
		}),
		fetchUsers: build.query<IUser[], any>({
			query: () => ({
				url: '/users'
			}),
			providesTags: result => ['user']
		}),
		setRegistration: build.mutation<IAuth, setIUser>({
			query: (user) => ({
				url: '/auth/registration',
				method: 'POST',
				body: user,
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					localStorage.setItem('token', response.data.accessToken)
					dispatch(setUser(response.data.user))
					dispatch(setIsAuth(true))
				} catch {}
			},
			invalidatesTags: ['user']
		}),
		setLogin: build.mutation<IAuth, setIUser>({
			query: (user) => ({
				url: '/auth/login',
				method: 'POST',
				body: user,
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					localStorage.setItem('token', response.data.accessToken)
					dispatch(setUser(response.data.user))
					dispatch(setIsAuth(true))
				} catch {}
			},
			invalidatesTags: ['user']
		}),
		checkAuth: build.mutation<IAuth, null>({
			query: () => ({
				url: '/auth/refresh',
				method: 'POST'
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					localStorage.setItem('token', response.data.accessToken)
					dispatch(setUser(response.data.user))
					dispatch(setIsAuth(true))
				} catch {}
			}
		}),
		logout: build.mutation({
			query: () => ({
				url: '/auth/logout',
				method: 'POST'
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					localStorage.removeItem('token')
					dispatch(setUser({}))
					dispatch(setIsAuth(false))
				} catch {}
			}
		})
	})
})