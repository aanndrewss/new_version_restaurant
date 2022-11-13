import { ICart } from '../../models/ICart'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ICart = {
	id: 0,
	userId: 0,
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {}
})

export default cartSlice.reducer