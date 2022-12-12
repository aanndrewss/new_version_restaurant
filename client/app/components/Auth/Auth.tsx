import React from 'react'
import { useRouter } from 'next/router'
import { userAPI } from '../../../services/UserService'
import { createIUser, loginIUser } from '../../models/IUser'
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/contstants'
import { useForm } from 'react-hook-form'
import styles from './Auth.module.scss'
import Meta from '../../Meta'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Link from 'next/link'
import { ScssTextField } from '../../utils/ScssTextField'

const AuthComponent = () => {

	const router = useRouter()
	const authID = router.query.authID
	const isLogin = authID === 'login'
	const [loginUser, {}] = userAPI.useSetLoginMutation()
	const [registrateUser, { isError, error }] = userAPI.useSetRegistrationMutation()

	const onSubmit = async ({ email, password, name, phone, gender }) => {
		try {
			if (isLogin) {
				await loginUser({ email, password } as loginIUser)

			} else {
				await registrateUser({ email, password, name, phone, gender } as createIUser)
			}
			router.push(HOME_ROUTE)
		} catch (e) {
			alert(e.response.data.message)
		}
	}

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm({
		mode: 'onBlur'
	})


	return (
		<div className={styles.wrapper}>
			<Meta title={isLogin ? 'Sign in' : 'Create account'} />
			<div className={styles.card}>
				<div className={styles.heading}>
					{isLogin ? 'Sign in' : 'Create account'}
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					{!isLogin && <ScssTextField
						{...register('name', {
							required: 'Field is required!'
						})}
						className={styles.textField}
						placeholder='Name'
						label='Name'
						error={!!errors.name}
						helperText={errors?.name?.message}
					/>}
					{!isLogin && <ScssTextField
						{...register('phone', {
							required: 'Field is required!',
							pattern: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
						})}
						className={styles.textField}
						placeholder='Phone'
						label='Phone'
						error={!!errors.phone}
						helperText={errors?.phone?.message || errors.phone?.type === 'pattern' && 'Phone is incorrect!'}
					/>}
					{!isLogin &&
						<FormControl className={styles.textField}>
							<InputLabel id='demo-simple-select-disabled-label'>Gender</InputLabel>
							<Select
								{...register('gender', {
									required: 'Field is required!'
								})}
								labelId='demo-simple-select-disabled-label'
								placeholder='Gender'
								label='Gender'
								error={!!errors.gender}
								helperText={errors?.gender?.message}
							>
								<MenuItem value={'Male'}>Male</MenuItem>
								<MenuItem value={'Female'}>Female</MenuItem>
							</Select>
						</FormControl>
					}
					<ScssTextField
						{...register('email', {
							required: 'Field is required!',
							pattern: /^\S+@\S+\.\S+$/
						})}
						className={styles.textField}
						placeholder='Email'
						label='Email'
						error={!!errors.email}
						helperText={errors?.email?.message || errors.email?.type === 'pattern' && 'Email is incorrect!'}
					/>
					<ScssTextField
						{...register('password', {
							required: 'Field is required!'
						})}
						className={styles.textField}
						placeholder='Password'
						type='password'
						label='Password'
						error={!!errors.password}
						helperText={errors?.password?.message}
					/>

					<div className={styles.footerCard}>
						{isLogin ?
							<div className={styles.text}>
								Have not account? <Link className={styles.link} href={REGISTRATION_ROUTE}>
								<div className={styles.link}>Create</div>
							</Link>
							</div>
							:
							<div className={styles.text}>
								Have account? <Link className={styles.link} href={LOGIN_ROUTE}>
								<div className={styles.link}>Sign in</div>
							</Link>
							</div>
						}
						<button type='submit' className={styles.enterButton}>
							{isLogin ? 'Sign in' : 'Create'}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AuthComponent
