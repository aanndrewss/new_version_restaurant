import React from 'react'
import DishList from '../app/components/DishList/DishList'
import Meta from '../app/Meta'

function Menu() {

	return (
		<div>
			<Meta title={'Menu'} />
			<DishList/>
		</div>
	)
}

export default Menu