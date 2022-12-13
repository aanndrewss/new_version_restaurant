import React from 'react'
import styles from './Order.module.scss'
import { useAppSelector } from '../../hooks/redux'
import { cartAPI } from '../../../services/CartService'
import { userAPI } from '../../../services/UserService'
import OrderCartItem from './OrderCartItem'
import OrderAddresses from './OrderAddresses'
import Contacts from './Contacts'

const OrderComponent = () => {

	const { id, totalPrice } = useAppSelector(state => state.cartReducer)
	const { data: dishes } = cartAPI.useFetchCartQuery(id)
	const { user } = useAppSelector(state => state.userReducer)
	const { data: userInfo } = userAPI.useFetchUserQuery(user.id)

	return (
		<div className={styles.orderWrapper}>
			<h2 className={styles.heading}>Ordering</h2>
			<div className={styles.cardsWrapper}>
				<div className={styles.card}>
					<h2>Cart</h2>
					<div className={styles.cartItemsWrapper}>
						{dishes && dishes.items.map(item =>
							<OrderCartItem key={item.id} item={item} />
						)}
					</div>
					<div className={styles.totalPrice}>
						<p>Result:</p> {totalPrice}₽
					</div>
				</div>
				<div className={styles.card}>
					<Contacts phone={user.phone} />
				</div>
				<OrderAddresses addresses={user.addresses} />
			</div>
			<div className={styles.btnWrapper}>
				<button>Checkout</button>
			</div>
		</div>
	)
}

export default OrderComponent
