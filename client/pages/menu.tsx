import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DishList from '../components/DishList/DishList'

function Menu(props) {


	const dispatch = useDispatch()

	useEffect(() => {

	}, [])
	

	return (
		<div>
			<div>menu</div>
			<DishList/>
		</div>
	)
}

export default Menu