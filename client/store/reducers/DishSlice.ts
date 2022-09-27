import { IDish } from '../../models/IDish'
import { createSlice } from '@reduxjs/toolkit'

interface DishState {
	dishes: IDish[]
	isLoading: boolean
	error: string
}

const initialState: DishState = {
	dishes: [],
	isLoading: false,
	error: ''
}

export const dishSlice = createSlice({
	name: 'dish',
	initialState,
	reducers: {

	}
})

export default dishSlice.reducer