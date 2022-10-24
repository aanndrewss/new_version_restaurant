import React, { FC } from 'react'
import { IDish } from '../../models/IDish'
import styles from '../../styles/DishItem.module.scss'
import Link from 'next/link'
import { DISH_ROUTE } from '../../utils/contstants'

interface DishItemProps {
	dish: IDish
}

const DishItem: FC<DishItemProps> = ({dish}) => {


	return (
		<div className={styles.card}>


			<Link href={DISH_ROUTE + `/${dish.id}`}>
				<img className={styles.img} src={'http://localhost:5000/' + dish.img} alt='' />
			</Link>
			<div className={styles.name}>{dish.name}</div>
			<div className={styles.price}>{dish.price}</div>

		</div>
	)
}

export default DishItem
