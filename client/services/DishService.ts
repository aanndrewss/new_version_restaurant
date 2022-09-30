import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IDish } from '../models/IDish'
import { IDishes } from '../models/IDishes'


export const dishAPI = createApi({
	reducerPath: 'dishAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
	tagTypes: ['dish'],
	endpoints: (build) => ({
		fetchDish: build.query<IDish, any>({
			query: () => ({
				url: '/:id'
			})
		}),
		fetchDishes: build.query<IDishes, number>({
			query: (limit: number = 5) => ({
				url: '/dish',
				params: {
					_limit: limit
				}
			}),
			providesTags: result => ['dish']
		}),
		createDish: build.mutation<IDish, IDish>({
			query: (dish) => ({
				url: '/dish',
				method: 'POST',
				body: dish
			}),
			invalidatesTags: ['dish']
		})
	})
})