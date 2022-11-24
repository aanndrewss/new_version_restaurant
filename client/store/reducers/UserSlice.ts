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
}

const initialState: UserState = {
	user: {
		id: null,
		email: null,
		avatarPath: null,
		gender: null,
		name: null,
		phone: null,
		addresses: [],
		orders: [
			{
				id: 1,
				userId: 2,
				date: new Date(),
				address: { city: 'Kazan', street: 'Dekabristov', home: 181 },
				cart: {
					id: 2, userId: 2, items: {
						id: 1, basketId: 2, dishId: 4, count: 1, cartDish: {
							id: 1,
							name: 'Sushi with salmon',
							grams: 32,
							price: 125,
							typeId: 1,
							img: 'e1fd21e3-fae1-453c-aca6-87147346ce73.jpg'
						}
					}
				}
			},
			{
				id: 1,
				userId: 2,
				date: new Date(),
				address: { city: 'Kazan', street: 'Dekabristov', home: 181 },
				cart: {
					id: 2, userId: 2, items: {
						id: 1, basketId: 2, dishId: 4, count: 1, cartDish: {
							id: 1,
							name: 'Sushi with salmon',
							grams: 32,
							price: 125,
							typeId: 1,
							img: 'e1fd21e3-fae1-453c-aca6-87147346ce73.jpg'
						}
					}
				}
			},
			{
				id: 1,
				userId: 2,
				date: new Date(),
				address: { city: 'Kazan', street: 'Dekabristov', home: 181 },
				cart: {
					id: 2, userId: 2, items: {
						id: 1, basketId: 2, dishId: 4, count: 1, cartDish: {
							id: 1,
							name: 'Sushi with salmon',
							grams: 32,
							price: 125,
							typeId: 1,
							img: 'e1fd21e3-fae1-453c-aca6-87147346ce73.jpg'
						}
					}
				}
			}
		]
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