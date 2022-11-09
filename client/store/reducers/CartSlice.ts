import { ICart } from '../../models/ICart'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ICart = {
	totalPrice: 0,
	id: 0,
	userId: 0,
	basketDishes: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {}
})

export default cartSlice.reducer