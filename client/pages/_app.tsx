import '../styles/globals.scss'
import { Provider } from 'react-redux'
import store from '../store/store'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

export default function MyApp({ Component, pageProps }) {


	return (
		<Provider store={store}>
			<div className={styles.wrapper}>
				<Header />
				<Component {...pageProps} />
			</div>
		</Provider>
	)
}

