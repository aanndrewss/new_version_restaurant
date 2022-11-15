import { ICart } from '../../models/ICart'
import { createSlice } from '@reduxjs/toolkit'

interface ICartState {
	id: number
	totalPrice: number
	countAll: number
	items: ICart[]
}

const initialState: ICartState = {
	id: 0,
	totalPrice: 0,
	countAll: 0,
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload
		},
		setId(state, action) {
			state.id = action.payload
		},
		calcTotalPrice(state, action) {
			state.totalPrice = action.payload.reduce((sum, obj) => obj.cartDish.price * obj.count + sum, 0)
		},
		setCount(state, action) {
			state.countAll = action.payload.reduce((sum, obj) => sum + obj.count, 0)
		}
	}
})

export const { setCount, calcTotalPrice, setItems, setId } = cartSlice.actions

export default cartSlice.reducer