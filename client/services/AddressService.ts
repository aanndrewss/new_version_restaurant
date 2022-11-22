import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IAddress } from '../models/IAddress'
import { setAddresses, setUser } from '../store/reducers/UserSlice'


export const addressAPI = createApi({
	reducerPath: 'addressAPI',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
	tagTypes: ['address'],
	endpoints: (build) => ({
		createAddress: build.mutation<IAddress, IAddress>({
			query: (address) => ({
				url: '/address/create',
				method: 'POST',
				body: address
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(setAddresses(response.data))
				} catch {}
			}
		}),
		updateAddress: build.mutation<IAddress, IAddress>({
			query: (address) => ({
				url: '/address/update',
				method: 'PUT',
				body: address
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(setAddresses(response.data))
				} catch {}
			}
		}),
		deleteAddress: build.mutation<IAddress, IAddress>({
			query: (address) => ({
				url: '/address/delete',
				method: 'DELETE',
				body: address
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(setAddresses(response.data))
				} catch {}
			}
		}),
	})
})