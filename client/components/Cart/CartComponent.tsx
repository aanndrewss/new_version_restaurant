import React from 'react'
import styles from '../../styles/CartList.module.scss'
import CartItem from './CartItem'
import IconArrowRight from '../../icons/OrderArrow'

const CartComponent = () => {

	const dishes = {
		totalPrice: 0,
		items: [
			{id: 1, name: 'Wok', img: 'ebb922c2-33c5-4b43-bf10-ef88ee1ae0bb.jpg', grams: 300, price: 300, count: 1},
		]
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.cardOfCart}>
				<h2 className={styles.cartHeading}>
					Cart
				</h2>
				{dishes && dishes.items.map(item =>
					<CartItem key={item.id} item={item}/>
				)}
				<div className={styles.orderSubmit}>
					<div className={styles.wrapperOrderSubmit}>
						<div className={styles.totalPrice}>
							Total Price: {dishes.totalPrice}
						</div>
						<button className={styles.orderBtn}>
								Order
							<div className={styles.arrow}>
								<IconArrowRight />
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartComponent
