import React, { FC } from 'react'
import { ICartItem } from '../../models/ICartItem'
import Image from 'next/image'
import styles from './Order.module.scss'
import IconCross2 from '../../../public/icons/Cross'

interface CartItemProps {
	item: ICartItem
}

const OrderCartItem: FC<CartItemProps> = ({item}) => {
	return (
		<div className={styles.cartItemWrapper}>
			<Image className={styles.img} src={'http://localhost:5000/' + item.cartDish.img} width={85} height={60} />
			<div className={styles.count}><IconCross2 /> {item.count}</div>
		</div>
	)
}

export default OrderCartItem
