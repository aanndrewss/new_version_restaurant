import React from 'react'
import { useRouter } from 'next/router'
import styles from './../../styles/Auth.module.scss'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/contstants'
import { userAPI } from '../../services/UserService'
import { setIUser } from '../../models/IUser'

const Auth = () => {

	const router = useRouter()
	const authID = router.query.authID
	const isLogin = authID === 'login'
	const [loginUser, {}] = userAPI.useSetLoginMutation()
	const [registrateUser, {isError, error}] = userAPI.useSetRegistrationMutation()

	const onSubmit = async ({ email, password }) => {
		if (isLogin) {
			await loginUser({ email, password } as setIUser)
		} else {
			await registrateUser({ email, password } as setIUser)
		}
	}

	const {
		register,
		handleSubmit
	} = useForm({
		mode: 'onBlur'
	})

	if (isError) {
		return <div>{JSON.stringify(error.data.message)}</div>
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<div className={styles.heading}>
					{isLogin ? 'Sign in' : 'Create account'}
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<input className={styles.textField}
								 {...register('email', {
									 required: 'Field is required!'
								 })}
								 placeholder='Email'

					/>
					<input className={styles.textField}
								 {...register('password', {
									 required: 'Field is required!'
								 })}
								 placeholder='Password'
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

export default Auth
