import React, { ChangeEvent, FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Address.module.scss'
import { addressAPI } from '../../../../services/AddressService'
import { IAddress } from '../../../models/IAddress'

interface IAddAddressFormProps {
	address: IAddress,
	userId: number,
	setEditMode: (editMode: boolean) => void,
	setAddMode: (AddMode: boolean) => void,
	editMode: boolean
}

const AddAddressForm: FC<IAddAddressFormProps> = ({ address, userId, setEditMode, setAddMode, editMode }) => {

	const [createAddress, {}] = addressAPI.useCreateAddressMutation()
	const [updateAddress, {}] = addressAPI.useUpdateAddressMutation()

	const [city, setCity] = useState(address.city)
	const [street, setStreet] = useState(address.street)
	const [home, setHome] = useState(address.home)

	const onCityChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCity(e.currentTarget.value)
	}
	const onStreetChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStreet(e.currentTarget.value)
	}
	const onHomeChange = (e: ChangeEvent<HTMLInputElement>) => {
		setHome(e.currentTarget.value)
	}

	const {
		register,
		handleSubmit
	} = useForm({
		mode: 'onBlur'
	})

	const onSubmit = (formData) => {

		const values = {
			userId: userId,
			city: formData.city,
			street: formData.street,
			home: formData.home
		}
		const values1 = {
			id: address.id,
			userId: userId,
			city: formData.city,
			street: formData.street,
			home: formData.home
		}
		setEditMode(false)
		setAddMode(false)

		{
			editMode ?
			updateAddress(values1) :
				// @ts-ignore
			createAddress(values)
		}
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
							onChange={onCityChange}
							value={city}
						/>
						<input
							{...register('street', {
								required: 'Field is required!'
							})}
							value={street}
							placeholder='Street'
							className={styles.customFormInput}
							onChange={onStreetChange}
							autoComplete='off'
						/>
						<input
							{...register('home', {
								required: 'Field is required!'
							})}
							placeholder='Home'
							onChange={onHomeChange}
							className={styles.customFormInput}
							autoComplete='off'
							value={home}
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
