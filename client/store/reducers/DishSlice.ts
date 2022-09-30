import { IDish } from '../../models/IDish'
import { createSlice } from '@reduxjs/toolkit'

interface DishState {
	dishes: IDish[]
	isLoading: boolean
	error: string
	totalCount: number
	searchValue: string
	page: number
	limit: number
}

const initialState: DishState = {
	dishes: [],
	isLoading: false,
	error: '',
	totalCount: 0,
	searchValue: '',
	page: 1,
	limit: 9
}

export const dishSlice = createSlice({
	name: 'dish',
	initialState,
	reducers: {
		dishesFetching(state) {
			state.isLoading = true
		},
		setDishes(state, action) {
			state.isLoading = false
			state.dishes = action.payload
			state.error = ''
		},
		setError(state, action) {
			state.isLoading = false
			state.error = action.payload
		},
		setTotalCount(state, action) {
			state.totalCount = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		setPage(state, action) {
			state.page = action.payload
		}
	}
})

export const { setDishes, setTotalCount } = dishSlice.actions

export default dishSlice.reducer