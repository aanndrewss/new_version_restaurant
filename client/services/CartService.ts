import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ICart } from '../models/ICart'
import { ICartItem } from '../models/ICartItem'
import { IAddDish } from '../models/IAddDish'
import { setDishes } from '../store/reducers/DishSlice'
import { calcTotalPrice, setCount, setId, setItems } from '../store/reducers/CartSlice'


export const cartAPI = createApi({
	reducerPath: 'cartAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
	tagTypes: ['cart'],
	endpoints: (build) => ({
		fetchCart: build.query<ICart, number>({
			query: (id: number) => ({
				url: `/basket/${id}`
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(setDishes(response.data.items))
					dispatch(calcTotalPrice(response.data.items))
					dispatch(setCount(response.data.items))
					dispatch(setId(response.data.id))
				} catch{}
			},
			providesTags: result => ['cart'],
		}),
		addToCart: build.mutation<ICart, IAddDish>({
			query: (addDish) => ({
				url: '/basket/add',
				method: 'POST',
				body: addDish
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(calcTotalPrice(response.data.items))
					dispatch(setCount(response.data.items))
					console.log(response.data.items)
				} catch{}
			},

			invalidatesTags: ['cart']
		}),
		minusItem: build.mutation<ICart, IAddDish>({
			query: (addDish) => ({
				url: '/basket/minus',
				method: 'PUT',
				body: addDish
			}),
			invalidatesTags: ['cart']
		}),
		removeFromCart: build.mutation<ICart, IAddDish>({
			query: (addDish) => ({
				url: '/basket/delete',
				method: 'DELETE',
				body: addDish
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					const response = await queryFulfilled
					dispatch(calcTotalPrice(response.data.items))
				} catch{}
			},
			invalidatesTags: ['cart']
		}),
		clearCart: build.mutation<ICart, IAddDish>({
			query: (addDish) => ({
				url: '/basket/clear',
				method: 'DELETE',
				body: addDish
			}),
			async onQueryStarted(arg, {queryFulfilled, dispatch}) {
				try {
					dispatch(setItems({}))
				} catch{}
			},
			invalidatesTags: ['cart']
		})
	})
})