import React, { FC } from 'react'
import { IDish } from '../../models/IDish'
import styles from './DishItem.module.scss'
import Link from 'next/link'
import { DISH_ROUTE } from '../../utils/contstants'
import { useAppSelector } from '../../hooks/redux'
import { IAddDish } from '../../models/IAddDish'
import { cartAPI } from '../../../services/CartService'

interface DishItemProps {
	dish: IDish
}

const DishItem: FC<DishItemProps> = ({ dish }) => {

	const { user } = useAppSelector(state => state.userReducer)

	const values: IAddDish = {
		dishId: dish.id,
		userId: user.id,
		basketId: user.id
	}

	const [addItem, {}] = cartAPI.useAddToCartMutation()

	return (
		<div className={styles.card}>
			<Link href={DISH_ROUTE + `/${dish.id}`}>
				<img className={styles.img} src={'http://localhost:5000/' + dish.img} alt='' />
			</Link>
			<div className={styles.cardInfoWrapper}>
				<div className={styles.name}>{dish.name}</div>
				<div className={styles.btnWrapper}>
					<div className={styles.gramPriceWrap}>
						<div className={styles.price}>
							{dish.price}₽
						</div>
						<div className={styles.grams}>
							{dish.grams}g
						</div>
					</div>
					<button onClick={() => addItem(values)} className={styles.btnAddToCart}>
						Add to cart
					</button>
				</div>

			</div>


		</div>
	)
}

export default DishItem
