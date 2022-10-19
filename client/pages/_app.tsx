import '../styles/globals.scss'
import { Provider } from 'react-redux'
import store from '../store/store'
import Header from '../components/Header'
import { userAPI } from '../services/UserService'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {



	return (
		<Provider store={store}>
			<Header />
			<Component {...pageProps} />
		</Provider>
	)
}

