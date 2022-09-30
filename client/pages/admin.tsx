import React from 'react'
import { useForm } from 'react-hook-form'
import { typeAPI } from '../services/TypeService'
import { IType } from '../models/IType'


type FormValues = {
	name: string
}

function Admin(props) {

	const [createType, {}] = typeAPI.useCreateTypeMutation()

	const {
		register,
		handleSubmit
	} = useForm<FormValues>({
		mode: 'onBlur'
	})

	const onSubmit = async ({name}) => {
		await createType({name, body: name} as IType)
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
					<input
						{...register('name', {})}

					/>
				<button type='submit'>add</button>
			</form>
		</div>
	)
}

export default Admin