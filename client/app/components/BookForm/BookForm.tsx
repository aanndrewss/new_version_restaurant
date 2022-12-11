import React, { useState } from 'react'
import styles from './BookForm.module.scss'
import { useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

const BookForm = () => {

	const [date, setDate] = useState()
	const [time, setTime] = useState()

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm({
		mode: 'onBlur'
	})

	const onSubmit = () => {

	}

	return (
		<div className={styles.popupWindow}>
			<h2 className={styles.heading}>Reserve a table</h2>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<TextField
					{...register('name', {
						required: 'Field is required!'
					})}
					label='Name'
					placeholder='Name'
					fullWidth
					size={'small'}
					className={styles.textField}
				/>
				<TextField
					{...register('phone', {
						required: 'Field is required!'
					})}
					label='Phone'
					placeholder='Phone'
					fullWidth
					size={'small'}
				/>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<DesktopDatePicker
						className={styles.textField}
						label='Pick date'
						inputFormat='DD/MM/YYYY'
						renderInput={(params) => <TextField {...params} />}
						onChange={() => setDate(date)} value={date} />
					<TimePicker
						className={styles.textField}
						label='Pick time'
						value={time}
						onChange={() => setTime(time)}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
				<button>
					Reserve
				</button>
			</form>
		</div>
	)
}

export default BookForm
