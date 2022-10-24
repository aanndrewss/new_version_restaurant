import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IDish } from '../models/IDish'
import { IDishes } from '../models/IDishes'
import { setDishes, setTotalCount } from '../store/reducers/DishSlice'


export const dishAPI = createApi({
	reducerPath: 'dishAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
	tagTypes: ['dish'],
	endpoints: (build) => ({
		fetchDish: build.query<IDish, any>({
			query: (id: number) => ({
				url: `/dish/${id}`
			})
		}),
		fetchDishes: build.query<IDishes, number>({
			query: (limit: number) => ({
				url: '/dish',
				params: {
					_limit: limit
				}
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(setDishes(response.data.rows))
					dispatch(setTotalCount(response.data.count))
				} catch{}
			},
			providesTags: result => ['dish']
		}),
		createDish: build.mutation<IDish, IDish>({
			query: (dish) => ({
				url: '/dish',
				method: 'POST',
				body: dish
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(setDishes(response.data))
				} catch{}
			},
			invalidatesTags: ['dish']
		})
	})
})