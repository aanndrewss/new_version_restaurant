import { IUser } from '../../app/models/IUser'
import { createSlice } from '@reduxjs/toolkit'

interface UserState {
	user: IUser
	isLoading: boolean
	error: string
	isAuth: boolean
}

const initialState: UserState = {
	user: {
		id: null,
		email: null,
		avatarPath: null,
		gender: null,
		name: null,
		phone: null,
		addresses: []
	},
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
			state.user = action.payload
			state.error = ''
		},
		setIsAuth(state, action) {
			state.isAuth = action.payload
		},
		setError(state, action) {
			state.error = action.payload
			state.isLoading = false
		}
	}
})


export const { setIsAuth, setUser } = userSlice.actions

export default userSlice.reducer