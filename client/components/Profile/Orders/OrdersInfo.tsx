import React from 'react'
import styles from '../../../styles/Profile.module.scss'
import OrderItem from './OrderItem'

const OrdersInfo = ({ orders }) => {
	return (
		<div>
			<div className={styles.orders}>
				<div className={styles.ordersWrapperHeading}>
					<h2 className={styles.ordersHeading}>Orders</h2>
				</div>
				<div>
					{orders && orders.length === 0 ? <h2 className={styles.notHaveSmth}>You don't have orders!</h2> :
						orders && orders.map((order) => <OrderItem key={order.id} order={order} />)
					}
				</div>
			</div>
		</div>
	)
}

export default OrdersInfo
