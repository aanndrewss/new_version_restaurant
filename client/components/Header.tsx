import React, { useEffect } from 'react'
import styles from './../styles/Header.module.scss'
import wrapper from './../styles/Home.module.scss'
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

	const { isAuth, user } = useAppSelector(state => state.userReducer)

	const [logOut, {}] = userAPI.useLogoutMutation()

	return (
		<div className={styles.header}>
			<div className={wrapper.wrapper}>
				<div className={styles.headerWrapper}>
					<div className={styles.brandName}>
						TAI PHO
					</div>
					<div className={styles.headerLinks}>
						<Link href={HOME_ROUTE}>
							<button className={styles.btnLinks}>
								Home
							</button>
						</Link>
						<Link href={HOME_ROUTE+'#stock'}>
							<button className={styles.btnLinks}>
								Stock
							</button>
						</Link>
						<Link href={HOME_ROUTE+'#delivery'}>
							<button className={styles.btnLinks}>
								Delivery
							</button>
						</Link>
					</div>
					<div className={styles.enterLinks}>
						{isAuth ?
							<>
								<div className={styles.cart}>
									<IconShoppingCart />
								</div>
								<div className={styles.dropdown}>
									<div className={styles.user}>
										<IconUser/>
									</div>
									<div className={styles.dropdownContent}>
										<Link href={PROFILE_ROUTE + `/${user.id}`}><button className={styles.btnContent}>Profile</button></Link>
										<button className={styles.btnContent}>Settings</button>
										<button onClick={() => logOut('')} className={styles.btnContent}>Logout</button>
									</div>
								</div>
							</> :
							<Link href={LOGIN_ROUTE}>
								<button className={styles.btnEnter}>
									Login
								</button>
							</Link>
						}
					</div>
				</div>
			</div>
		</div>


	)
}

export default Header
