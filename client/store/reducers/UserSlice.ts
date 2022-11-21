import { IUser } from '../../models/IUser'
import { createSlice } from '@reduxjs/toolkit'
import { userAPI } from '../../services/UserService'
import { useDispatch } from 'react-redux'
import { IAddress } from '../../models/IAddress'


interface UserState {
	user: IUser
	isLoading: boolean
	error: string
	isAuth: boolean
	addresses: IAddress
}

const initialState: UserState = {
	user: {id: null, email: null, avatarPath: null, gender: null, name: null, phone: null},
	isLoading: false,
	error: '',
	isAuth: false,
	addresses: {city: null, street: null, home: null}
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
		setAddresses(state, action) {
			state.addresses = action.payload
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


export const { setIsAuth, setUser, setAddresses } = userSlice.actions

export default userSlice.reducer