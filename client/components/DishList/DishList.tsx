import React from 'react'
import DishItem from './DishItem'
import { dishAPI } from '../../services/DishService'
import styles from '../../styles/DishList.module.scss'
import wrapper from '../../styles/Home.module.scss'
import { useAppSelector } from '../../hooks/redux'

const MyComponent = () => {

	const { selectedType } = useAppSelector(state => state.typeReducer)
	const { page, limit, searchValue } = useAppSelector(state => state.dishReducer)
	const values = {
		page: page,
		limit: limit,
		searchValue: searchValue,
		typeId: selectedType.id
	}
	const { data: dishes, error, isLoading } = dishAPI.useFetchDishesQuery(values)
	const isEmpty = !Object.keys(selectedType).length


	return (
		<div className={wrapper.wrapper}>
			<div className={styles.spanWrapper}>
				<div className={styles.type}>
					{isEmpty ? 'ALL' : selectedType.name}
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
