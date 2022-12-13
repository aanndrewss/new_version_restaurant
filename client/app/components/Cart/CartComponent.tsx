import React from 'react'
import styles from './CartList.module.scss'
import CartItem from './CartItem/CartItem'
import IconArrowRight from '../../../public/icons/OrderArrow'
import { cartAPI } from '../../../services/CartService'
import { useAppSelector } from '../../hooks/redux'
import { useRouter } from 'next/router'
import IconShoppingCart from '../../../public/icons/Cart'
import Link from 'next/link'
import { ORDER_ROUTE } from '../../utils/contstants'

const CartComponent = () => {

	const router = useRouter()
	const cartID = router.query.cartID
	const { totalPrice } = useAppSelector(state => state.cartReducer)

	const { data: dishes } = cartAPI.useFetchCartQuery(Number(cartID))

	return (
		<div className={styles.wrapper}>
			<div className={styles.cardOfCart}>
				<h2 className={styles.cartHeading}>
					Cart <IconShoppingCart width={40} height={40} />
				</h2>
				{dishes && dishes.items.map(item =>
					<CartItem key={item.id} item={item} />
				)}
				{totalPrice != 0 ?
					<div className={styles.orderSubmit}>
						<div className={styles.wrapperOrderSubmit}>
							<div className={styles.totalPrice}>
								Total Price: {totalPrice}
							</div>
							<Link href={ORDER_ROUTE}>
								<button className={styles.orderBtn}>
									To ordering
									<div className={styles.arrow}>
										<IconArrowRight />
									</div>
								</button>
							</Link>

						</div>
					</div>
					:
					<div className={styles.wrapperEmptyCart}>
						<img src='https://cdn.dodostatic.net/site-static/dist/121df529925b0f43cc73.svg' alt='Empty' />
						<h1 className={styles.emptyHeading}>Oh, empty!</h1>
						<div className={styles.emptyDesc}>
							Your cart is empty, please open the «Menu»
							and choose the item you like.
							We will deliver your order from 599 ₽
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default CartComponent
