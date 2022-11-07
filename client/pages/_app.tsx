import '../styles/globals.scss'
import { Provider } from 'react-redux'
import store from '../store/store'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'
import TypeBar from '../components/TypeBar'
import React from 'react'
import Footer from '../components/Footer'

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

