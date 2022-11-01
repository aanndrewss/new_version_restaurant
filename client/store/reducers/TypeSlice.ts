import { IType } from '../../models/IType'
import { createSlice } from '@reduxjs/toolkit'


interface TypeState {
	types: IType[],
	error: string,
	isLoading: boolean,
	selectedType: object
}

const initialState: TypeState = {
	types: [],
	error: '',
	isLoading: false,
	selectedType: {}
}

export const typeSlice = createSlice({
	name: 'type',
	initialState,
	reducers: {
		fetchingTypes(state) {
			state.isLoading = true
		},
		setTypes(state, action) {
			state.isLoading = false
			state.types = action.payload
			state.error = ''
		},
		setError(state, action) {
			state.isLoading = false
			state.error = action.payload
		},
		setSelectedType(state, action) {
			state.selectedType = action.payload
		}
	}
})

export const {setSelectedType} = typeSlice.actions

export default typeSlice.reducer