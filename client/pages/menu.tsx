import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DishList from '../components/DishList/DishList'
import { dishAPI } from '../services/DishService'
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