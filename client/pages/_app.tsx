import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { setupStore } from '../store/store'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={setupStore()}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
