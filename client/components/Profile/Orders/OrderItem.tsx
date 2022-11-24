import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Orders.module.scss'


const OrderItem = ({ order }) => {
	return (
		<>
					<img src={'http://localhost:5000/' + order.cart.items.cartDish.img} alt='Order' className={styles.slideImg}/>
					<div>{order.address.city}</div>
		</>
	)
}

export default OrderItem
