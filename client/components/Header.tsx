import React, { useEffect } from 'react'
import styles from './../styles/Header.module.scss'
import { FaAccessibleIcon } from 'react-icons/fa'
import Link from 'next/link'
import { HOME_ROUTE, LOGIN_ROUTE, MENU_ROUTE, PROFILE_ROUTE } from '../utils/contstants'
import { useAppSelector } from '../hooks/redux'
import { userAPI } from '../services/UserService'
import { log } from 'util'

const Header = () => {

	const [refresh, {}] = userAPI.useCheckAuthMutation()

	useEffect(() => {
		if(localStorage.getItem('token')) {
			refresh(null)
		}
	}, [])

	const { isAuth } = useAppSelector(state => state.userReducer)

	const [logOut, {}] = userAPI.useLogoutMutation()

	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperHeader}>
				<div className={styles.header}>
					<div className={styles.brandName}>
						<FaAccessibleIcon />
						LI
					</div>
					<div className={styles.headerLinks}>
						<Link href={HOME_ROUTE}>
							<button className={styles.btnLinks}>
								home
							</button>
						</Link>
						<Link href={MENU_ROUTE}>
							<button className={styles.btnLinks}>
								menu
							</button>
						</Link>
					</div>
					<div className={styles.enterLinks}>
						{isAuth ?
							<>
								<Link href={PROFILE_ROUTE}>
									<button className={styles.btnEnter}>
										profile
									</button>
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
			</div>
		</div>
	)
}

export default Header
