import React from 'react'
import DishItem from './DishItem'
import { dishAPI } from '../../services/DishService'
import styles from '../../styles/DishList.module.scss'

const MyComponent = () => {

	const { data: dishes, error, isLoading } = dishAPI.useFetchDishesQuery(2)

	return (
		<div>
			<div className={styles.grid1}>
				{dishes && dishes.rows.map(dish =>
					<DishItem key={dish.id} dish={dish} />
				)}
			</div>
		</div>
	)
}

export default MyComponent
