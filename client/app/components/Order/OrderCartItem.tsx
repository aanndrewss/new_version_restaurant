import React, { FC } from 'react'
import { ICartItem } from '../../models/ICartItem'
import Image from 'next/image'
import styles from './Order.module.scss'

interface CartItemProps {
	item: ICartItem
}

const OrderCartItem: FC<CartItemProps> = ({item}) => {
	return (
		<div>
			<Image className={styles.img} src={'http://localhost:5000/' + item.cartDish.img} width={65} height={50} />
		</div>
	)
}

export default OrderCartItem
