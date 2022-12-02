import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Orders.module.scss'
import OrderSlideItem from './OrderSlideItem'
import ArrowDown from '../../../../public/icons/ArrowDown'


const OrderItem = ({ date, cart, address, price }) => {
	return (
		<>
			<div className={styles.imgsWrapper}>
				{cart.items.length > 0 ? cart.items.map((item) => <OrderSlideItem key={item.id} {...item} />) : false}
			</div>
			<div className={styles.dateWrapper}>
				<div>{date.getDate()}</div>.<div>{date.getMonth()}</div>.
				<div>{date.getFullYear()} y.</div>
			</div>
			<div className={styles.addressWrapper}>
				<div className={styles.city}>{address.city}</div>
				<div className={styles.street}>{address.street}</div>
			</div>
			<div className={styles.textDetailed}>
				Detailed composition <ArrowDown/>
			</div>
			<div className={styles.btnPriceWrapper}>
				<button className={styles.reorderBtn}>
					Repeat
				</button>
				<div className={styles.price}>
					{price}₽
				</div>
			</div>

		</>
	)
}

export default OrderItem
