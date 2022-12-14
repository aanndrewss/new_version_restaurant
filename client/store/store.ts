import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import dishReducer from './reducers/DishSlice'
import userReducer from './reducers/UserSlice'
import typeReducer from './reducers/TypeSlice'
import cartReducer from './reducers/CartSlice'
import { userAPI } from '../services/UserService'
import { dishAPI } from '../services/DishService'
import { typeAPI } from '../services/TypeService'
import { cartAPI } from '../services/CartService'
import { profileAPI } from '../services/ProfileService'
import { addressAPI } from '../services/AddressService'

const rootReducer = combineReducers({
	dishReducer,
	userReducer,
	typeReducer,
	cartReducer,
	[userAPI.reducerPath]: userAPI.reducer,
	[dishAPI.reducerPath]: dishAPI.reducer,
	[typeAPI.reducerPath]: typeAPI.reducer,
	[cartAPI.reducerPath]: cartAPI.reducer,
	[profileAPI.reducerPath]: profileAPI.reducer,
	[addressAPI.reducerPath]: addressAPI.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.concat(typeAPI.middleware)
				.concat(userAPI.middleware)
				.concat(dishAPI.middleware)
				.concat(cartAPI.middleware)
				.concat(profileAPI.middleware)
				.concat(addressAPI.middleware)
	})
}

const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default store
