import React, { FC, useState } from 'react'
import { IDish } from '../../../models/IDish'
import styles from './DishItem.module.scss'
import Link from 'next/link'
import { DISH_ROUTE } from '../../../utils/contstants'
import { useAppSelector } from '../../../hooks/redux'
import { IAddDish } from '../../../models/IAddDish'
import { cartAPI } from '../../../../services/CartService'
import Image from 'next/image'
import ModalDish from './ModalDish/ModalDish'

interface DishItemProps {
	dish: IDish
}

const DishItem: FC<DishItemProps> = ({ dish }) => {

	const { user } = useAppSelector(state => state.userReducer)
	const [isOpen, setIsOpen] = useState(false)

	const values: IAddDish = {
		dishId: dish.id,
		userId: user.id,
		basketId: user.id
	}

	const [addItem, {}] = cartAPI.useAddToCartMutation()

	return (
		<div className={styles.card}>
			<Image onClick={() => setIsOpen(true)} width={250} height={200} className={styles.img} src={process.env.APP_URL1 + dish.img} alt='' />
			{isOpen && <ModalDish isOpen={isOpen} setIsOpen={setIsOpen} dish={dish} addItem={addItem} values={values}/>}
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
