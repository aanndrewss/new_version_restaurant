import React from 'react'
import { typeAPI } from '../services/TypeService'
import styles from '../styles/Types.module.scss'

const TypeBar = () => {

	const { data: types, error, isLoading } = typeAPI.useFetchTypesQuery('')

	return (
			<div className={styles.types}>
				{types && types.map(type =>
					<div className={styles.type}>{type.name}</div>
				)}
			</div>
	)
}

export default TypeBar
