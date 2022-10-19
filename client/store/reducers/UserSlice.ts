import { IUser } from '../../models/IUser'
import { createSlice } from '@reduxjs/toolkit'
import { userAPI } from '../../services/UserService'
import { useDispatch } from 'react-redux'


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