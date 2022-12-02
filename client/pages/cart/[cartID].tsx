import React from 'react'
import CartComponent from '../../app/components/Cart/CartComponent'
import Meta from '../../app/Meta'

const Cart = () => {
	return (
		<div>
			<Meta title={'Your cart'} />
			<CartComponent />
		</div>
	)
}

export default Cart
