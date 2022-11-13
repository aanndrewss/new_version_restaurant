import React, { FC } from 'react'
import { ICartItem } from '../../models/ICartItem'
import styles from '../../styles/CartItem.module.scss'
import IconMinus from '../../icons/Minus'
import IconPlus from '../../icons/Plus'
import IconCross from '../../icons/Cross'

interface CartItemProps {
	item: ICartItem
}

const CartItem: FC<CartItemProps> = ({ item }) => {
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
						<button className={styles.btnClear}>
							<IconCross/>
						</button>
					</div>
					<div className={styles.sep}><span></span></div>
					<div className={styles.cardSection2}>
						<div className={styles.price}>
							{item.cartDish.price}₽
						</div>
						<div className={styles.groupButton}>
							<button disabled={item.count === 1} className={styles.btnMinus}>
								<IconMinus/>
							</button>
							<div className={styles.count}>{item.count}</div>
							<button className={styles.btnPlus}>
								<IconPlus/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartItem
