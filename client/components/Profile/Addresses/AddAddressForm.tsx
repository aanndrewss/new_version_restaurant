import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../../styles/Profile.module.scss'
import { addressAPI } from '../../../services/AddressService'

const AddAddressForm = ({ addresses, userId, setEditMode }) => {

	const [createAddress, {}] = addressAPI.useCreateAddressMutation()


	const {
		register,
		handleSubmit
	} = useForm({
		mode: 'onBlur'
	})

	const onSubmit = (formData) => {
		setEditMode(false)
		const values = {
			userId: userId,
			city: formData.city,
			street: formData.street,
			home: formData.home
		}
		createAddress(values)
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.addAddressForm}>
				<div className={styles.inputsWrapper}>
					<input
						{...register('city', {
							required: 'Field is required!'
						})}
						placeholder='City'
						className={styles.customFormInput}
					/>
					<input
						{...register('street', {
							required: 'Field is required!'
						})}

						placeholder='Street'
						className={styles.customFormInput}
					/>
					<input
						{...register('home', {
							required: 'Field is required!'
						})}
						placeholder='Home'
						className={styles.customFormInput}
					/>
				</div>
				<div className={styles.buttons}>
					<button className={styles.btnCancel} onClick={() => setEditMode(false)}>Cancel</button>
					<button className={styles.btnSave} type='submit'>Save</button>
				</div>
			</form>
		</div>
	)
}

export default AddAddressForm
