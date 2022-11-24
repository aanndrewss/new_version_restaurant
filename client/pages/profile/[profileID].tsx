import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import styles from '../../components/Profile/Profile.module.scss'
import ProfileInfo from '../../components/Profile/ProfileInfo'
import OrdersInfo from '../../components/Profile/Orders/OrdersInfo'
import AddressesInfo from '../../components/Profile/Addresses/AddressesInfo'
import { userAPI } from '../../services/UserService'

const ProfilePage = () => {

	const { user } = useAppSelector(state => state.userReducer)
	const { data: userInfo } = userAPI.useFetchUserQuery(user.id)
	const orders = [
		{
			id: 1,
			userId: 2,
			address: { city: 'Kazan', street: 'Dekabristov', home: 181 },
			cart: {
				id: 2, userId: 2, items: {
					id: 1, basketId: 2, dishId: 4, count: 1, cartDish: {
						id: 1,
						name: 'Sushi with salmon',
						grams: 32,
						price: 125,
						typeId: 1,
						img: 'e1fd21e3-fae1-453c-aca6-87147346ce73.jpg'
					}
				}
			}
		},
		{
			id: 1,
			userId: 2,
			address: { city: 'Kazan', street: 'Dekabristov', home: 181 },
			cart: {
				id: 2, userId: 2, items: {
					id: 1, basketId: 2, dishId: 4, count: 1, cartDish: {
						id: 1,
						name: 'Sushi with salmon',
						grams: 32,
						price: 125,
						typeId: 1,
						img: 'e1fd21e3-fae1-453c-aca6-87147346ce73.jpg'
					}
				}
			}
		},
		{
			id: 1,
			userId: 2,
			address: { city: 'Kazan', street: 'Dekabristov', home: 181 },
			cart: {
				id: 2, userId: 2, items: {
					id: 1, basketId: 2, dishId: 4, count: 1, cartDish: {
						id: 1,
						name: 'Sushi with salmon',
						grams: 32,
						price: 125,
						typeId: 1,
						img: 'e1fd21e3-fae1-453c-aca6-87147346ce73.jpg'
					}
				}
			}
		}
	]


	return (
		<div className={styles.profileWrapper}>
			<div className={styles.profileContentWrapper}>
				<ProfileInfo user={user} />
				<div className={styles.ordersAndAddresses}>
					<AddressesInfo addresses={user.addresses} userId={user.id} />
					<OrdersInfo orders={orders}/>
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
