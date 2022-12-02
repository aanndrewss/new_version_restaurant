import React, { FC } from 'react'
import styles from './Orders.module.scss'
import IconCross2 from '../../../../public/icons/Cross'

import { ICartItem } from '../../../models/ICartItem'
interface IOrderDetailsProps {
	item: ICartItem
}

const OrderDetails: FC<IOrderDetailsProps> = ({item}) => {
	return (
		<div className={styles.orderDetailWrapper}>
			<div className={styles.orderDetailItem}>
				<h3>{item.cartDish.name}</h3> <span><IconCross2 className={styles.crossIcon}/>{item.count}</span>
			</div>
		</div>
	)
}

export default OrderDetails
