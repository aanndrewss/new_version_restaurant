import React from 'react'
import styles from './Orders.module.scss'

const OrderSlideItem = ({cartDish}) => {
	return (
		<div>
			<img className={styles.slideImg} src={'http://localhost:5000/' + cartDish.img} alt='Dish' />
		</div>
	)
}

export default OrderSlideItem
