import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import styles from '../../styles/Profile.module.scss'
import ProfileInfo from '../../components/Profile/ProfileInfo'
import OrdersInfo from '../../components/Profile/OrdersInfo'
import AddressesInfo from '../../components/Profile/Addresses/AddressesInfo'
import { userAPI } from '../../services/UserService'

const ProfilePage = () => {

	const { user } = useAppSelector(state => state.userReducer)
	const { data: user1 } = userAPI.useFetchUserQuery(user.id)

	return (
		<div className={styles.profileWrapper}>
			<div className={styles.profileContentWrapper}>
				{user1 &&
					<>
						<ProfileInfo user={user1.user} />
						<div className={styles.ordersAndAddresses}>
							<AddressesInfo addresses={user1.user.addresses} />
							<OrdersInfo />
						</div>
					</>
				}

			</div>
		</div>
	)
}

export default ProfilePage
