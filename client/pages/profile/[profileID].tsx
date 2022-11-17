import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import styles from '../../styles/Profile.module.scss'
import ProfileInfo from '../../components/Profile/ProfileInfo'
import OrdersInfo from '../../components/Profile/OrdersInfo'
import AddressesInfo from '../../components/Profile/AddressesInfo'

const ProfilePage = () => {

	const { user } = useAppSelector(state => state.userReducer)

	return (
		<div className={styles.profileWrapper}>
			<div className={styles.profileContentWrapper}>
				<ProfileInfo user={user} />
				<div className={styles.ordersAndAddresses}>
					<OrdersInfo />
					<AddressesInfo />
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
