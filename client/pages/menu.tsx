import React from 'react'
import DishList from '../components/DishList/DishList'
import TypeBar from '../components/TypeBar'

function Menu(props) {
	

	return (
		<div>
			<TypeBar/>
			<DishList/>
		</div>
	)
}

export default Menu