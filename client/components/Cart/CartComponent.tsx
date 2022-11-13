import React from 'react'
import styles from '../../styles/CartList.module.scss'
import CartItem from './CartItem'
import IconArrowRight from '../../icons/OrderArrow'
import { cartAPI } from '../../services/CartService'

const CartComponent = () => {

	const { data: dishes} = cartAPI.useFetchCartQuery(1)

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
							Total Price: 0
						</div>
						<button className={styles.orderBtn}>
							To ordering
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
