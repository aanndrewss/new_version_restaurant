import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { setupStore } from '../store/store'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={setupStore()}>
			<Header/>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
