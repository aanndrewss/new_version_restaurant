import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IDish } from '../app/models/IDish'
import { IDishes } from '../app/models/IDishes'
import { setDishes } from '../store/reducers/DishSlice'


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
		fetchDishes: build.query<IDishes, {
			typeId: number;
			searchValue: string;
			limit: number;
			page: number;
		}>({
			query: (arg) => {
				const {
					typeId,
					page,
					limit,
					searchValue: name1
				} = arg
				return {
					url: '/dish',
					params: {
						name1,
						page,
						limit,
						typeId
					}
				}
			},
			/*async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(setDishes(response.data.rows))
					dispatch(setTotalCount(response.data.count))
				} catch{}
			},*/
			providesTags: result => ['dish']
		}),
		createDish: build.mutation<IDish, IDish>({
			query: (dish) => ({
				url: '/dish',
				method: 'POST',
				body: dish
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const response = await queryFulfilled
					dispatch(setDishes(response.data))
				} catch {
				}
			},
			invalidatesTags: ['dish']
		})
	})
})