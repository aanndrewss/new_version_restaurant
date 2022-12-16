import React, { FC, useState } from 'react'
import styles from './BookForm.module.scss'
import { useForm } from 'react-hook-form'
import { DesktopDatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { ScssTextField } from '../../utils/ScssTextField'
import { Dialog } from '@headlessui/react'
import IconCross2 from '../../../public/icons/Cross'
import ModalOrderComplete from '../Order/ModalOrder/ModalOrderComplete'

interface IBookFormProps {
	setIsOpen: (isOpen: boolean) => void
	isOpen: boolean
}

const BookForm: FC<IBookFormProps> = ({ setIsOpen, isOpen }) => {

	const [date, setDate] = useState()
	const [time, setTime] = useState()
	const [isShow, setIsShow] = useState(false)

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm({
		mode: 'onBlur'
	})

	const onSubmit = () => {
		setIsShow(true)
	}

	return (

		<>
			<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
				<div className={styles.bg}>
					<button className={styles.closeBtn} onClick={() => setIsOpen(false)}><IconCross2/></button>
					<Dialog.Panel className={styles.popupWindow}>
						<Dialog.Title className={styles.heading}>
							Reserve a table
						</Dialog.Title>
						<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
							<ScssTextField
								{...register('name', {
									required: 'Field is required!'
								})}
								label='Name'
								placeholder='Name'
								fullWidth
								autoComplete='off'
								size={'small'}
								className={styles.textField}
								error={!!errors.name}
								helperText={errors?.name?.message}
							/>
							<ScssTextField
								{...register('phone', {
									required: 'Field is required!'
								})}
								label='Phone'
								placeholder='Phone'
								fullWidth
								autoComplete='off'
								size={'small'}
								error={!!errors.phone}
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
							{isShow && <ModalOrderComplete setIsOpen={setIsShow} isOpen={isShow} setIsOpen1={setIsOpen}/>}
						</form>
						<div className={styles.terms}>By clicking on the button, you agree to the <a>policy of personal data
							processing</a></div>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>

	)
}

export default BookForm
