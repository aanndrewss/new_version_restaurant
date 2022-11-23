import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import styles from '../../styles/Profile.module.scss'
import ProfileInfo from '../../components/Profile/ProfileInfo'
import OrdersInfo from '../../components/Profile/Orders/OrdersInfo'
import AddressesInfo from '../../components/Profile/Addresses/AddressesInfo'
import { userAPI } from '../../services/UserService'
import { profileAPI } from '../../services/ProfileService'

const ProfilePage = () => {

	const { user } = useAppSelector(state => state.userReducer)
	const {data: userInfo} = userAPI.useFetchUserQuery(user.id)
	const orders = []

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
