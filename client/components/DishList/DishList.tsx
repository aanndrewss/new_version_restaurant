import React from 'react'
import DishItem from './DishItem'
import { dishAPI } from '../../services/DishService'

const MyComponent = () => {

	const { data: dishes, error, isLoading } = dishAPI.useFetchDishesQuery(2)


	return (
		<div>
			<div>
				{dishes && dishes.rows.map(dish =>
					<DishItem key={dish.id} dish={dish}/>
				)}
			</div>
		</div>
	)
}

export default MyComponent
