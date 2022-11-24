import React, { FC } from 'react'
import { ICartItem } from '../../models/ICartItem'
import styles from './CartItem.module.scss'
import IconMinus from '../../icons/Minus'
import IconPlus from '../../icons/Plus'
import IconCross from '../../icons/Cross'
import { cartAPI } from '../../services/CartService'
import { useAppSelector } from '../../hooks/redux'
import { IAddDish } from '../../models/IAddDish'

interface CartItemProps {
	item: ICartItem
}

const CartItem: FC<CartItemProps> = ({ item }) => {

	const { user } = useAppSelector(state => state.userReducer)

	const values: IAddDish = {
		dishId: item.dishId,
		userId: user.id,
		basketId: user.id
	}

	const [addItem, {}] = cartAPI.useAddToCartMutation()
	const [minusItem, {}] = cartAPI.useMinusItemMutation()
	const [removeItem, {}] = cartAPI.useRemoveFromCartMutation()

	return (
		<>
			<div className={styles.cartWrapper}>
				<div className={styles.card}>
					<div className={styles.cardSection1Wrapper}>
						<div className={styles.cardSection1}>
							<img className={styles.image} src={'http://localhost:5000/' + item.cartDish.img} alt='Item' />
							<div className={styles.nameAndGrams}>
								<div className={styles.name}>
									{item.cartDish.name}
								</div>
								<div className={styles.grams}>
									{item.cartDish.grams}g
								</div>
							</div>
						</div>
						<button onClick={() => removeItem(values)} className={styles.btnClear}>
							<IconCross />
						</button>
					</div>
					<div className={styles.sep}><span></span></div>
					<div className={styles.cardSection2}>
						<div className={styles.price}>
							{item.cartDish.price * item.count}₽
						</div>
						<div className={styles.groupButton}>
							<button onClick={() => minusItem(values)} disabled={item.count === 1} className={styles.btnMinus}>
								<IconMinus />
							</button>
							<div className={styles.count}>{item.count}</div>
							<button onClick={() => addItem(values)} className={styles.btnPlus}>
								<IconPlus />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartItem
