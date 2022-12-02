import React, { FC, useState } from 'react'
import styles from './Orders.module.scss'
import OrderSlideItem from './OrderSlideItem'
import ArrowDown from '../../../../public/icons/ArrowDown'
import OrderDetails from './OrderDetails'
import IconBxsUpArrow from '../../../../public/icons/UpArrow'
import { IOrder } from '../../../models/IOrder'

interface IOrderItemProps {
	order: IOrder
}

const OrderItem: FC<IOrderItemProps> = ({ order }) => {

	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className={styles.imgsWrapper}>
				{order.cart.items.length > 0 ? order.cart.items.map((item) => <OrderSlideItem key={item.id} {...item} />) : false}
			</div>
			<div className={styles.dateWrapper}>
				<div>{order.date.getDate()}</div>
				.
				<div>{order.date.getMonth()}</div>
				.
				<div>{order.date.getFullYear()} y.</div>
			</div>
			<div className={styles.addressWrapper}>
				<div className={styles.city}>{order.address.city}</div>
				<div className={styles.street}>{order.address.street}</div>
			</div>
			{isOpen ? null :
				<div className={styles.textDetailed} onClick={() => setIsOpen(true)}>
					Detailed composition <ArrowDown />
				</div>
			}
			{isOpen ?
				<div style={{marginTop: '1rem'}}>
				 {order.cart.items.map(item => <OrderDetails key={item.id} item={item}/>)}
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
					{order.price}₽
				</div>
			</div>
		</>
	)
}

export default OrderItem
