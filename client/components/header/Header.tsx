import React, { useEffect } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import { BASKET_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../../utils/contstants'
import { useAppSelector } from '../../hooks/redux'
import { userAPI } from '../../services/UserService'
import IconShoppingCart from '../../icons/Cart'
import IconUser from '../../icons/User'
import { cartAPI } from '../../services/CartService'
import IconAvatar from '../../icons/Avatar'

const Header = () => {

	const [refresh, {}] = userAPI.useCheckAuthMutation()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			refresh(null)
		}
	}, [])

	const { isAuth, user } = useAppSelector(state => state.userReducer)
	const { countAll } = useAppSelector(state => state.cartReducer)

	const { data: dishes } = cartAPI.useFetchCartQuery(user.id)

	const [logOut, {}] = userAPI.useLogoutMutation()

	return (
		<div className={styles.header}>
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
					<Link href={HOME_ROUTE + '#stock'}>
						<button className={styles.btnLinks}>
							Stock
						</button>
					</Link>
					<Link href={HOME_ROUTE + '#delivery'}>
						<button className={styles.btnLinks}>
							Delivery
						</button>
					</Link>
				</div>
				<div className={styles.enterLinks}>
					{isAuth ?
						<>
							<Link href={BASKET_ROUTE + `/${user.id}`}>
								<button className={styles.cart}>
									{countAll != 0 ?
										<>
											<div className={styles.textCart}>
												Cart
											</div>
											<span>|</span>
											<div className={styles.textCount}>
												{countAll}
											</div>
										</>
										:
										<div>Cart</div>}
								</button>
							</Link>
							<div className={styles.dropdown}>
								<div className={styles.user}>
									{user.avatarPath ?
										<img className={styles.avatar} src={'http://localhost:5000/' + user.avatarPath} alt='Avatar' /> :
										<IconUser width={25} height={25} />}
								</div>
								<div className={styles.dropdownContent}>
									<Link href={PROFILE_ROUTE + `/${user.id}`}>
										<button className={styles.btnContent}>Profile</button>
									</Link>
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


	)
}

export default Header
