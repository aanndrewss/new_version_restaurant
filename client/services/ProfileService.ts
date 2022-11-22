import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAddresses, setUser } from '../store/reducers/UserSlice'
import { IEmail } from '../models/IEmail'
import { GetIUser } from '../models/getIUser'
import { IName } from '../models/IName'
import { IPhone } from '../models/IPhone'
import { IGender } from '../models/IGender'
import { IAvatar } from '../models/IAvatar'


export const profileAPI = createApi({
	reducerPath: 'profileAPI',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
	tagTypes: ['profile'],
	endpoints: (build) => ({
		updateUserName: build.mutation<GetIUser, IName>({
			query: (name) => ({
				url: `/users/update/name`,
				method: 'PUT',
				body: name
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(setUser(response.data.user))
					dispatch(setAddresses(response.data.user.addresses))
				} catch {}
			}
		}),
		updateUserEmail: build.mutation<GetIUser, IEmail>({
			query: (email) => ({
				url: `/users/update/email`,
				method: 'PUT',
				body: email
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(setUser(response.data.user))
				} catch {}
			}
		}),
		updateUserPhone: build.mutation<GetIUser, IPhone>({
			query: (phone) => ({
				url: `/users/update/phone`,
				method: 'PUT',
				body: phone
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(setUser(response.data.user))
				} catch {}
			}
		}),
		updateUserGender: build.mutation<GetIUser, IGender>({
			query: (gender) => ({
				url: `/users/update/gender`,
				method: 'PUT',
				body: gender
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(setUser(response.data.user))
				} catch {}
			}
		}),
		updateUserAvatar: build.mutation<GetIUser, IAvatar>({
			query: (avatar) => ({
				url: `/users/update/avatar`,
				method: 'PUT',
				body: avatar
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(setUser(response.data.user))
				} catch {}
			}
		}),
	})
})