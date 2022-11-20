import React from 'react'
import styles from '../../styles/Profile.module.scss'
import IconAvatar from '../../icons/Avatar'
import IconEdit2 from '../../icons/Edit'

const ProfileInfo = ({ user }) => {
	return (
		<div className={styles.profile}>
			<div className={styles.avatarWrapper}>
				{
					user.avatarPath ?
						<img className={styles.avatar} src={'http://localhost:5000/' + user.avatarPath} alt='Avatar' /> :
						<img className={styles.avatar} src={'../../assets/default_avatar.jpg'} alt='Avatar' />
				}
			</div>
			<div className={styles.userInfo}>
				<div className={styles.info}>
					{
						user.name ?
							<div className={styles.infoItemName}><h2 className={styles.name}>{user.name}</h2> <IconEdit2 className={styles.iconEdit} /></div> :
							<div className={styles.infoItemName}><h2 className={styles.name}>Add your name</h2> <IconEdit2 className={styles.iconEdit} /></div>
					}
				</div>
				<h3 className={styles.infoHeading}>Email:</h3>
				<div className={styles.info}>
					<div className={styles.infoItem}>{user.email} <IconEdit2 className={styles.iconEdit} /></div>
				</div>
				<h3 className={styles.infoHeading}>Phone:</h3>
				<div className={styles.info}>
					{
						user.phone ?
							<div className={styles.infoItem}>{user.phone} <IconEdit2 className={styles.iconEdit} /></div> :
							<div className={styles.infoItem}>Add <IconEdit2 className={styles.iconEdit} /></div>
					}
				</div>
				<h3 className={styles.infoHeading}>Gender:</h3>
				<div className={styles.info}>{
					user.gender ?
						<div className={styles.infoItem}>{user.gender} <IconEdit2 className={styles.iconEdit} /></div> :
						<div className={styles.infoItem}>Add <IconEdit2 className={styles.iconEdit} /></div>
				}</div>
			</div>
		</div>
	)
}

export default ProfileInfo
