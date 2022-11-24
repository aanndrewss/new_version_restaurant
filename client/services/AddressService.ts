import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IAddress } from '../models/IAddress'
import { setAddresses, setUser } from '../store/reducers/UserSlice'
import { GetIUser } from '../models/getIUser'


export const addressAPI = createApi({
	reducerPath: 'addressAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
	tagTypes: ['address'],
	endpoints: (build) => ({
		createAddress: build.mutation<GetIUser, IAddress>({
			query: (address) => ({
				url: '/address/create',
				method: 'POST',
				body: address
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const response = await queryFulfilled
					dispatch(setAddresses(response.data.user.addresses))
					dispatch(setUser(response.data.user))
				} catch {
				}
			}
		}),
		updateAddress: build.mutation<GetIUser, IAddress>({
			query: (address) => ({
				url: '/address/update',
				method: 'PUT',
				body: address
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const response = await queryFulfilled
					dispatch(setAddresses(response.data.user.addresses))
					dispatch(setUser(response.data.user))
				} catch {
				}
			}
		}),
		deleteAddress: build.mutation<GetIUser, IAddress>({
			query: (address) => ({
				url: '/address/delete',
				method: 'DELETE',
				body: address
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const response = await queryFulfilled
					dispatch(setAddresses(response.data.user.addresses))
					dispatch(setUser(response.data.user))
				} catch {
				}
			}
		})
	})
})