import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import styles from '../../styles/Profile.module.scss'
import IconAvatar from '../../icons/Avatar'
import Dropzone from 'react-dropzone'
import AvatarEditor from 'react-avatar-editor'

const ProfilePage = () => {

	const { user } = useAppSelector(state => state.userReducer)


	return (
		<div className={styles.profileWrapper}>
			<div className={styles.profileContentWrapper}>
				<div className={styles.profile}>
					<div className={styles.avatarWrapper}>
						{user.avatarPath ?
							<img className={styles.avatar} src={'http://localhost:5000/' + user.avatarPath} alt='Avatar' /> :
							<IconAvatar className={styles.avatarIcon} width={70} height={70} />}
					</div>
					<h2 className={styles.name}>{user.name ? user.name : <div className={styles.name}>Add your name</div>}</h2>
					<div className={styles.userInfo}>
						<h3 className={styles.infoHeading}>Email:</h3>
						<div className={styles.info}>{user.email}</div>
						<h3 className={styles.infoHeading}>Phone:</h3>
						<div className={styles.info}>{user.phone ? user.phone : <div>Add</div>}</div>
						<h3 className={styles.infoHeading}>Gender:</h3>
						<div className={styles.info}>{user.gender}</div>

					</div>
				</div>
				<div className={styles.ordersAndAddresses}>
					<div className={styles.orders}>
						<h2>Orders</h2>
					</div>
					<div className={styles.addresses}>

					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
