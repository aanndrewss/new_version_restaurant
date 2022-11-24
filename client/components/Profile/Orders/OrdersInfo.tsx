import React from 'react'
import styles from './Orders.module.scss'
import OrderItem from './OrderItem'
import { Swiper } from 'swiper/react'


const OrdersInfo = ({ orders }) => {
	return (
		<div>
			<div className={styles.orders}>
				<div className={styles.ordersWrapperHeading}>
					<h2 className={styles.ordersHeading}>Orders</h2>
				</div>
				<Swiper
					spaceBetween={50}
					slidesPerView={2}
				>
					{orders && orders.length === 0 ? <h2 className={styles.notHaveSmth}>You don't have orders!</h2> :
						orders && orders.map((order) => <OrderItem key={order.id} order={order} />)
					}
				</Swiper>
			</div>
		</div>
	)
}

export default OrdersInfo
