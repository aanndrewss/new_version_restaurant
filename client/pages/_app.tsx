import '../styles/globals.scss'
import { Provider } from 'react-redux'
import store from '../store/store'
import Header from '../app/components/Header/Header'
import TypeBar from '../app/components/Menu/TypeBar'
import React from 'react'
import Footer from '../app/components/Footer/Footer'
import 'swiper/scss'
import 'swiper/scss/navigation'

export default function MyApp({ Component, pageProps }) {


	return (
		<Provider store={store}>
				<Header />
			<div>
				<TypeBar/>
				<Component {...pageProps} />
			</div>
			<Footer/>
		</Provider>
	)
}

