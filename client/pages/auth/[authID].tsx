import React from 'react'
import { useRouter } from 'next/router'
import styles from './../../styles/Auth.module.scss'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/contstants'

const Auth = () => {

	const router = useRouter()
	const authID = router.query.authID
	const isLogin = authID === 'login'

	const onSubmit = (formData) => {
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
								Have not account? <Link className={styles.link} href={REGISTRATION_ROUTE}>Create</Link>
							</div>
							:
							<div className={styles.text}>
								Have account? <Link className={styles.link} href={LOGIN_ROUTE}>Sign in</Link>
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
