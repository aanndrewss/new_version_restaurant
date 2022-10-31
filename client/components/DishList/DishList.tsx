import React from 'react'
import DishItem from './DishItem'
import { dishAPI } from '../../services/DishService'
import styles from '../../styles/DishList.module.scss'
import wrapper from '../../styles/Home.module.scss'

const MyComponent = () => {

	const { data: dishes, error, isLoading } = dishAPI.useFetchDishesQuery(2)

	return (
		<div className={wrapper.wrapper}>
			<div className={styles.spanWrapper}>
				<div className={styles.type}>
					TYPE OF DISH
				</div>
				<span className={styles.sep}></span>
			</div>
			<div className={styles.grid1}>
				{dishes && dishes.rows.map(dish =>
					<DishItem key={dish.id} dish={dish} />
				)}
			</div>
		</div>
	)
}

export default MyComponent
