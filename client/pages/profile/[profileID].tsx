import React from 'react'
import { useAppSelector } from '../../app/hooks/redux'
import styles from '../../app/components/Profile/Profile.module.scss'
import ProfileInfo from '../../app/components/Profile/ProfileInfo'
import OrdersInfo from '../../app/components/Profile/Orders/OrdersInfo'
import AddressesInfo from '../../app/components/Profile/Addresses/AddressesInfo'
import { userAPI } from '../../services/UserService'
import Meta from '../../app/Meta'
import { useRouter } from 'next/router'
import { HOME_ROUTE } from '../../app/utils/contstants'

const ProfilePage = () => {

	const { user, isAuth } = useAppSelector(state => state.userReducer)
	const router = useRouter()
	const { data: userInfo } = userAPI.useFetchUserQuery(user.id)
	const orders = [
		{
			id: 1,
			userId: 2,
			date: new Date(2022, 11, 13),
			price: 1232,
			address: { id: 1, city: 'Kazan', street: 'Dekabristov', home: 181 },
			cart: {
				id: 2, userId: 2, items: [
					{
						id: 1, basketId: 2, dishId: 4, count: 2, cartDish: {
							id: 1,
							name: 'Sushi with salmon',
							grams: 32,
							price: 125,
							typeId: 1,
							img: 'e1fd21e3-fae1-453c-aca6-87147346ce73.jpg'
						}
					},
					{
						id: 1, basketId: 2, dishId: 4, count: 2, cartDish: {
							id: 1,
							name: 'Sushi with salmon',
							grams: 32,
							price: 125,
							typeId: 1,
							img: 'e1fd21e3-fae1-453c-aca6-87147346ce73.jpg'
						}
					},
					{
						id: 1, basketId: 2, dishId: 4, count: 4, cartDish: {
							id: 1,
							name: 'Sushi with salmon',
							grams: 32,
							price: 125,
							typeId: 1,
							img: 'e1fd21e3-fae1-453c-aca6-87147346ce73.jpg'
						}
					}
				]
			}
		},
		{
			id: 1,
			userId: 2,
			price: 1600,
			date: new Date(2022, 9, 23),
			address: { id: 1, city: 'Kazan', street: 'Dekabristov', home: 181 },
			cart: {
				id: 2, userId: 2, items: [{
					id: 1, basketId: 2, dishId: 4, count: 1, cartDish: {
						id: 1,
						name: 'Sushi with salmon',
						grams: 32,
						price: 125,
						typeId: 1,
						img: 'e1fd21e3-fae1-453c-aca6-87147346ce73.jpg'
					}
				}]
			}
		},
		{
			id: 1,
			userId: 2,
			price: 923,
			date: new Date(2022, 2, 3),
			address: { id: 1, city: 'Kazan', street: 'Dekabristov', home: 181 },
			cart: {
				id: 2, userId: 2, items: [{
					id: 1, basketId: 2, dishId: 4, count: 1, cartDish: {
						id: 1,
						name: 'Sushi with salmon',
						grams: 32,
						price: 125,
						typeId: 1,
						img: 'e1fd21e3-fae1-453c-aca6-87147346ce73.jpg'
					}
				}]
			}
		},
		{
			id: 1,
			userId: 2,
			price: 1600,
			date: new Date(2022, 9, 23),
			address: { id: 1, city: 'Kazan', street: 'Dekabristov', home: 181 },
			cart: {
				id: 2, userId: 2, items: [{
					id: 1, basketId: 2, dishId: 4, count: 1, cartDish: {
						id: 1,
						name: 'Sushi with salmon',
						grams: 32,
						price: 125,
						typeId: 1,
						img: 'e1fd21e3-fae1-453c-aca6-87147346ce73.jpg'
					}
				}]
			}
		}
	]

	{!isAuth && router.push(HOME_ROUTE)}

	return (
			<div className={styles.profileWrapper}>
				<Meta title={'Profile'} />
				<div className={styles.profileContentWrapper}>
					<ProfileInfo user={user} />
					<div className={styles.ordersAndAddresses}>
						<AddressesInfo addresses={user.addresses} userId={user.id} />
						<OrdersInfo orders={orders} />
					</div>
				</div>
			</div>
	)
}

export default ProfilePage
