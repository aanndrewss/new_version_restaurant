import React from 'react'
import { useRouter } from 'next/router'
import { dishAPI } from '../../services/DishService'
import { skipToken } from '@reduxjs/toolkit/query'

const DishPage = () => {

	const router = useRouter()
	const { dishID } = router.query
	const { data: dish } = dishAPI.useFetchDishQuery(dishID ? dishID : skipToken)

	return (
		<div>
			{dish &&
				<>
					<div>
						{dish.name}
					</div>
					<img src={'http://localhost:5000/' + dish.img} alt='' />
				</>
			}
		</div>
	)
}

export default DishPage
