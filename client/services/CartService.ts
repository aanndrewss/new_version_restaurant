import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ICart } from '../models/ICart'
import { ICartItem } from '../models/ICartItem'


export const cartAPI = createApi({
	reducerPath: 'cartAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
	tagTypes: ['cart'],
	endpoints: (build) => ({
		fetchCart: build.query<ICart, number>({
			query: (id: number) => ({
				url: `/basket/${id}`
			})
		}),
		addToCart: build.query<ICartItem, ICartItem>({
			query: (cartItem) => ({
				url: '/basket',
				method: 'POST',
				body: cartItem
			})
		}),
		removeFromCart: build.query({
			query: () => ({
				url: '/basket',
				method: 'PUT'
			})
		}),
		clearCart: build.query({
			query: () => ({
				url: '/basket',
				method: 'DELETE'
			})
		})
	})
})