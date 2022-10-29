import React, { useEffect } from 'react'
import styles from './../styles/Header.module.scss'
import Link from 'next/link'
import { HOME_ROUTE, LOGIN_ROUTE, MENU_ROUTE, PROFILE_ROUTE } from '../utils/contstants'
import { useAppSelector } from '../hooks/redux'
import { userAPI } from '../services/UserService'
import IconShoppingCart from '../icons/Cart'
import IconUser from '../icons/User'

const Header = () => {

	const [refresh, {}] = userAPI.useCheckAuthMutation()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			refresh(null)
		}
	}, [])

	const { isAuth, users } = useAppSelector(state => state.userReducer)

	const [logOut, {}] = userAPI.useLogoutMutation()

	return (
		<div className={styles.header}>
			<div className={styles.brandName}>

				LI
			</div>
			<div className={styles.headerLinks}>
				<Link href={HOME_ROUTE}>
					<button className={styles.btnLinks}>
						Home
					</button>
				</Link>
				<Link href={MENU_ROUTE}>
					<button className={styles.btnLinks}>
						Menu
					</button>
				</Link>
			</div>
			<div className={styles.enterLinks}>
				{isAuth ?
					<>
						<div className={styles.cart}>
							<IconShoppingCart />
						</div>
						<Link href={PROFILE_ROUTE + `/${users.id}`}>
							<div className={styles.user}>
								<IconUser/>
							</div>
						</Link>
						<button onClick={() => logOut('')} className={styles.btnEnter}>
							logout
						</button>
					</> :
					<Link href={LOGIN_ROUTE}>
						<button className={styles.btnEnter}>
							LOGIN
						</button>
					</Link>
				}
			</div>
		</div>
	)
}

export default Header
