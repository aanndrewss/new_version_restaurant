import React from 'react'
import { typeAPI } from '../services/TypeService'

const TypeBar = () => {

	const {data: types, error, isLoading} = typeAPI.useFetchTypesQuery('')

	return (
		<div>
			{types && types.map(type => {
				<div>{type.name}</div>
			})}
		</div>
	)
}

export default TypeBar
