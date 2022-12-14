import React from 'react'
import styles from './Order.module.scss'

const TermsOfPolicy = () => {
	return (
		<div className={styles.card}>
			<div className={styles.termsOfPolicy}>By clicking "Checkout", you <a>consent</a> to the processing of your
				personal data and accept the <a
				>User Agreement</a></div>
		</div>
	)
}

export default TermsOfPolicy
