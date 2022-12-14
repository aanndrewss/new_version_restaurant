import React, { FC } from 'react'
import styles from './Order.module.scss'

interface IProps {
	setIsShow: (isShow: boolean) => void
}

const ModalOrderComplete: FC<IProps> = ({ setIsShow }) => {
	return (
		<div className={styles.popupWindow}>
			<div className={styles.popupWrapper}>
				<h2>You have successfully placed an order!</h2>
				<div className={styles.details}>Manager will callback to you later!</div>
				<button onClick={() => setIsShow(false)}>Close</button>
			</div>
		</div>
	)
}

export default ModalOrderComplete
