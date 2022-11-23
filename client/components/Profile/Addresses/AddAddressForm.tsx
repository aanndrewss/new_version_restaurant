import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../../styles/Profile.module.scss'
import { addressAPI } from '../../../services/AddressService'

const AddAddressForm = ({ addresses, userId, setEditMode, setAddMode, addMode, editMode }) => {

	const [createAddress, {}] = addressAPI.useCreateAddressMutation()
	const [updateAddress, {}] = addressAPI.useUpdateAddressMutation()

	const {
		register,
		handleSubmit
	} = useForm({
		mode: 'onBlur'
	})

	const onSubmit = (formData) => {
		setAddMode(false)

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
				{editMode ?
					<div className={styles.inputsWrapper}>
						<input
							{...register('city', {
								required: 'Field is required!'
							})}
							placeholder='City'
							className={styles.customFormInput}
							autoComplete='off'
							value={addresses.city}
						/>
						<input
							{...register('street', {
								required: 'Field is required!'
							})}
							value={addresses.street}
							placeholder='Street'
							className={styles.customFormInput}
							autoComplete='off'
						/>
						<input
							{...register('home', {
								required: 'Field is required!'
							})}
							placeholder='Home'
							className={styles.customFormInput}
							autoComplete='off'
							value={addresses.home}
						/>
					</div> :
					<div className={styles.inputsWrapper}>
						<input
							{...register('city', {
								required: 'Field is required!'
							})}
							placeholder='City'
							className={styles.customFormInput}
							autoComplete='off'
						/>
						<input
							{...register('street', {
								required: 'Field is required!'
							})}

							placeholder='Street'
							className={styles.customFormInput}
							autoComplete='off'
						/>
						<input
							{...register('home', {
								required: 'Field is required!'
							})}
							placeholder='Home'
							className={styles.customFormInput}
							autoComplete='off'
						/>
					</div>
				}
				<div className={styles.buttons}>
					{editMode ?
						<button className={styles.btnCancel} onClick={() => setEditMode(false)}>Cancel</button>
						: <button className={styles.btnCancel} onClick={() => setAddMode(false)}>Cancel</button>
					}
					<button className={styles.btnSave} type='submit'>Save</button>
				</div>
			</form>
		</div>
	)
}

export default AddAddressForm
