import React, { Fragment, useEffect, useState } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import { BASKET_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../../utils/contstants'
import { useAppSelector } from '../../hooks/redux'
import { userAPI } from '../../../services/UserService'
import { cartAPI } from '../../../services/CartService'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import IconUser from '../../../public/icons/User'
import IconLogout from '../../../public/icons/LogoutIcon'
import { useRouter } from 'next/router'


const Header = () => {

	const [refresh, { isLoading }] = userAPI.useCheckAuthMutation()

	const router = useRouter()

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
				<Link href={HOME_ROUTE}>
					<div className={styles.brandName}>
						TAI PHO
					</div>
				</Link>
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
					{isLoading ? <div>Loading...</div> :
						<>
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
									<Menu as='div' className={styles.dropdown}>
										<Menu.Button>
											{user.avatarPath ?
												<Image width={50} height={50} className={styles.avatar}
															 src={process.env.APP_URL1 + user.avatarPath}
															 alt='Avatar' /> :
												<img className={styles.avatar} src={'../../assets/default_avatar.jpg'}
														 alt='Avatar' />}
										</Menu.Button>

										<Menu.Items className={styles.dropdownContent}>
											<Menu.Item>
												<button className={styles.menuItem} onClick={() => router.push(PROFILE_ROUTE + `/${user.id}`)}>
													Profile <IconUser />
												</button>
											</Menu.Item>
											<Menu.Item>
												<button onClick={() => logOut('')} className={styles.menuItem}>
													Logout <IconLogout />
												</button>
											</Menu.Item>
										</Menu.Items>
									</Menu>
								</>
								:
								<Link href={LOGIN_ROUTE}>
									<button className={styles.btnEnter}>
										Login
									</button>
								</Link>
							}
						</>
					}
				</div>
			</div>
		</div>


	)
}

export default Header
