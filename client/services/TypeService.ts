import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IType } from '../models/IType'


export const typeAPI = createApi({
	reducerPath: 'typeAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
	tagTypes: ['type'],
	endpoints: (build) => ({
		fetchTypes: build.query<IType[], any>({
			query: () => ({
				url: '/type'
			}),
			providesTags: result => ['type']
		}),
		createType: build.mutation<IType, IType>({
			query: (type) => ({
				url: '/type',
				method: 'POST',
				body: type
			}),
			invalidatesTags: ['type']
		})
	})
})