import '../styles/globals.scss'
import { Provider } from 'react-redux'
import store from '../store/store'
import Header from '../app/components/Header/Header'
import TypeBar from '../app/components/Menu/TypeBar'
import React from 'react'
import Footer from '../app/components/Footer/Footer'
import 'swiper/scss'
import 'swiper/scss/navigation'
import ScrollToTop from '../app/hooks/ScrollToTop'

export default function MyApp({ Component, pageProps }) {

	return (
		<Provider store={store}>
			<ScrollToTop />
			<Header />
			<div>
				<TypeBar />
				<Component {...pageProps} />
			</div>
			<Footer />
		</Provider>
	)
}

