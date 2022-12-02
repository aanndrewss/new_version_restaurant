import React, { useState } from 'react'
import styles from './Orders.module.scss'
import OrderSlideItem from './OrderSlideItem'
import ArrowDown from '../../../../public/icons/ArrowDown'
import OrderDetails from './OrderDetails'
import IconBxsUpArrow from '../../../../public/icons/UpArrow'


const OrderItem = ({ date, cart, address, price }) => {

	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className={styles.imgsWrapper}>
				{cart.items.length > 0 ? cart.items.map((item) => <OrderSlideItem key={item.id} {...item} />) : false}
			</div>
			<div className={styles.dateWrapper}>
				<div>{date.getDate()}</div>
				.
				<div>{date.getMonth()}</div>
				.
				<div>{date.getFullYear()} y.</div>
			</div>
			<div className={styles.addressWrapper}>
				<div className={styles.city}>{address.city}</div>
				<div className={styles.street}>{address.street}</div>
			</div>
			{isOpen ? null :
				<div className={styles.textDetailed} onClick={() => setIsOpen(true)}>
					Detailed composition <ArrowDown />
				</div>
			}
			{isOpen ?
				<div style={{marginTop: '1rem'}}>
				 {cart.items.map(item => <OrderDetails key={item.id} {...item} />)}
				</div>
					: null
			}
			{isOpen ?
				<div className={styles.textDetailed} onClick={() => setIsOpen(false)}>
					Сollapse <IconBxsUpArrow />
				</div> : null
			}
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
