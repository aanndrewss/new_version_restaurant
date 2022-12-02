import '../styles/globals.scss'
import { Provider } from 'react-redux'
import store from '../store/store'
import Header from '../app/components/header/Header'
import styles from '../styles/Home.module.scss'
import TypeBar from '../app/components/typebar/TypeBar'
import React from 'react'
import Footer from '../app/components/footer/Footer'
import 'swiper/scss';
import 'swiper/scss/navigation';

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

