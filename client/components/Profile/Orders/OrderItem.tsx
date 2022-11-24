import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Orders.module.scss'


const OrderItem = ({ order }) => {
	return (
		<>
			<SwiperSlide>
				<div className={styles.slide}>
					{order.cart.items.cartDish.name}
				</div>

			</SwiperSlide>
		</>
	)
}

export default OrderItem
