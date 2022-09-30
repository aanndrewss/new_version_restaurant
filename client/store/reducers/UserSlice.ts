import { IUser } from '../../models/IUser'
import { createSlice } from '@reduxjs/toolkit'


interface UserState {
	users: IUser[]
	isLoading: boolean
	error: string
	isAuth: boolean
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: '',
	isAuth: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchingUser(state) {
			state.isLoading = true
		},
		setUser(state, action) {
			state.isLoading = false
			state.users = action.payload
			state.error = ''
		},
		setIsAuth(state) {
			state.isAuth = true
		},
		setError(state, action) {
			state.error = action.payload
			state.isLoading = false
		}
	}
})

export default userSlice.reducer