import React, { FC } from 'react'
import styles from './Order.module.scss'
import { IAddress } from '../../models/IAddress'
import { useForm } from 'react-hook-form'

interface IOrderAddressFormProps {
	address: IAddress
}

const OrderAddressForm: FC<IOrderAddressFormProps> = ({ address }) => {

	const {
		register,
		handleSubmit
	} = useForm({
		mode: 'onBlur'
	})

	const onSubmit = (formData) => {

	}

	return (
		<>
			<h4>Address *</h4>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<input
					{...register('city', {
						required: 'Field is required!'
					})}
					value={address.city}
					placeholder='City'
					className={styles.textField}
				/>
				<input
					{...register('street', {
						required: 'Field is required!'
					})}
					value={address.street}
					placeholder='Street'
					className={styles.textField}
				/>
				<input
					{...register('home', {
						required: 'Field is required!'
					})}
					value={address.home}
					placeholder='Home'
					className={styles.textField}
				/>
			</form>
		</>
	)
}

export default OrderAddressForm
