import React, { FC, useState } from 'react'
import styles from './BookForm.module.scss'
import { useForm } from 'react-hook-form'
import { DesktopDatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { ScssTextField } from '../../utils/ScssTextField'

interface IBookFormProps {
	setIsShow: (isShow: boolean) => void
}

const BookForm: FC<IBookFormProps> = ({ setIsShow }) => {

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
		setIsShow(false)
		alert('We will callback you later!')
	}

	return (

		<>
			<div className={styles.popupWindow}>
				<h2 className={styles.heading}>Reserve a table</h2>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<ScssTextField
						{...register('name', {
							required: 'Field is required!'
						})}
						label='Name'
						placeholder='Name'
						fullWidth
						size={'small'}
						className={styles.textField}
						error={errors?.name}
						helperText={errors?.name?.message}
					/>
					<ScssTextField
						{...register('phone', {
							required: 'Field is required!'
						})}
						label='Phone'
						placeholder='Phone'
						fullWidth
						size={'small'}
						error={errors?.phone}
						helperText={errors?.phone?.message}
					/>
					<LocalizationProvider dateAdapter={AdapterMoment}>
						<DesktopDatePicker
							className={styles.textField}
							label='Pick date'
							inputFormat='DD/MM/YYYY'
							renderInput={(params) => <ScssTextField {...params} />}
							onChange={() => setDate(date)} value={date} />
						<TimePicker
							className={styles.textField}
							label='Pick time'
							value={time}
							onChange={() => setTime(time)}
							renderInput={(params) => <ScssTextField {...params} />}
						/>
					</LocalizationProvider>
					<button>
						Reserve
					</button>
				</form>
				<div className={styles.terms}>By clicking on the button, you agree to the <a>policy of personal data
					processing</a></div>
			</div>
		</>

	)
}

export default BookForm
