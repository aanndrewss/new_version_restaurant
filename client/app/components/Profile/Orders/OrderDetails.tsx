import React from 'react'
import styles from './Orders.module.scss'
import IconCross2 from '../../../../public/icons/Cross'

const OrderDetails = ({count, cartDish}) => {
	return (
		<div className={styles.orderDetailWrapper}>
			<div className={styles.orderDetailItem}>
				<h3>{cartDish.name}</h3> <span><IconCross2 className={styles.crossIcon}/>{count}</span>
			</div>
		</div>
	)
}

export default OrderDetails
