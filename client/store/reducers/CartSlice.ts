import { ICart } from '../../models/ICart'
import { createSlice } from '@reduxjs/toolkit'

interface ICartState {
	id: number
	totalPrice: number
	items: ICart[]
}

const initialState: ICartState = {
	id: 0,
	totalPrice: 0,
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
			state.totalPrice = action.payload.cartDish.reduce((sum, obj) => obj.price * obj.count + sum, 0)
		}
	}
})

export const { calcTotalPrice, setItems, setId } = cartSlice.actions

export default cartSlice.reducer