import React, { ChangeEvent, FC, useState } from 'react'
import styles from './Profile.module.scss'
import IconEdit2 from '../../../public/icons/Edit'
import { profileAPI } from '../../../services/ProfileService'
import { IUser } from '../../models/IUser'

interface IProfileProps {
	user: IUser
}

const ProfileInfo: FC<IProfileProps>= ({ user }) => {

	const [addAvatar, {}] = profileAPI.useUpdateUserAvatarMutation()
	const [updateName, {}] = profileAPI.useUpdateUserNameMutation()
	const [updateEmail, {}] = profileAPI.useUpdateUserEmailMutation()
	const [updatePhone, {}] = profileAPI.useUpdateUserPhoneMutation()
	const [updateGender, {}] = profileAPI.useUpdateUserGenderMutation()

	const newAvatar = new FormData()

	const [editNameMode, setEditNameMode] = useState(false)
	const [editEmailMode, setEditEmailMode] = useState(false)
	const [editPhoneMode, setEditPhoneMode] = useState(false)
	const [editGenderMode, setEditGenderMode] = useState(false)
	const [name, setName] = useState(user.name)
	const [email, setEmail] = useState(user.email)
	const [phone, setPhone] = useState(user.phone)
	const [gender, setGender] = useState(user.gender)

	const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length) {
			newAvatar.append('id', user.id)
			newAvatar.append('avatarPath', e.target.files[0])
			addAvatar(newAvatar)
		}
	}

	const onGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setGender(e.target.value)
	}

	const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.currentTarget.value)
	}
	const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value)
	}
	const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPhone(e.currentTarget.value)
	}



	const onNameBlur = () => {
		setEditNameMode(false)
		const values = {
			id: user.id,
			name: name
		}
		updateName(values)
	}
	const onEmailBlur = () => {
		setEditEmailMode(false)
		const values = {
			id: user.id,
			email: email
		}
		updateEmail(values)
	}
	const onPhoneBlur = () => {
		setEditPhoneMode(false)
		const values = {
			id: user.id,
			phone: phone
		}
		updatePhone(values)
	}
	const onGenderBlur = () => {
		setEditGenderMode(false)
		const values = {
			id: user.id,
			gender: gender
		}
		updateGender(values)
	}

	return (
		<div className={styles.profile}>
			<div className={styles.avatarWrapper}>
				{
					user.avatarPath ?
						<img className={styles.avatar} src={process.env.APP_URL1 + user.avatarPath} alt='Avatar' /> :
						<img className={styles.avatar} src={'../../assets/default_avatar.jpg'} alt='Avatar' />
				}
				<div className={styles.tooltipText}>Change your avatar</div>
				<input title={' '} style={{
					overflow: 'hidden',
					opacity: 0,
					position: 'absolute',
					height: '150px',
					width: '150px',
					marginTop: '-5.5rem',
					cursor: 'pointer'
				}} type='file' onChange={onMainPhotoSelected} />
			</div>
			<div className={styles.userInfo}>
				<div className={styles.info}>
					{
						editNameMode ?
							<div className={styles.inputWrapper}>
								<input autoFocus={true} type='text' className={styles.customNameInput} value={name} onChange={onNameChange} onBlur={onNameBlur} />
							</div>
							:
							<div className={styles.infoItemName}>
								<h2 className={styles.name}>{user.name}</h2>
								<IconEdit2
									onClick={() => setEditNameMode(true)}
									className={styles.iconEdit} />
							</div>
					}
				</div>
				<h3 className={styles.infoHeading}>Email:</h3>
				<div className={styles.info}>
					{
						editEmailMode ?
							<div className={styles.inputInfoWrapper}>
								<input autoFocus={true} type='text' value={email} className={styles.customInput} onChange={onEmailChange} onBlur={onEmailBlur} />
							</div>
							:
							<div className={styles.infoItem}>
								<div className={styles.infoText}>{user.email}</div> <IconEdit2 className={styles.iconEdit} onClick={() => setEditEmailMode(true)} />
							</div>
					}
				</div>
				<h3 className={styles.infoHeading}>Phone:</h3>
				<div className={styles.info}>
					{
						editPhoneMode ?
							<div className={styles.inputInfoWrapper}>
								<input className={styles.customInput} autoFocus={true} type='text' value={phone} onChange={onPhoneChange} onBlur={onPhoneBlur} />
							</div>
							:
							<div className={styles.infoItem}>
								<div className={styles.infoText}>{user.phone}</div> <IconEdit2 className={styles.iconEdit} onClick={() => setEditPhoneMode(true)} />
							</div>
					}
				</div>
				<h3 className={styles.infoHeading}>Gender:</h3>
				<div className={styles.info}>
					{
						editGenderMode ?
							<div className={styles.inputInfoWrapper}>
								<select className={styles.customInput} style={{paddingBottom: '0.4rem', paddingTop: '0.4rem'}} autoFocus={true} value={gender} onChange={onGenderChange} onBlur={onGenderBlur}>
									<option value='Male'>Male</option>
									<option value='Female'>Female</option>
								</select>
							</div>
							:
							<div className={styles.infoItem}>
								<div className={styles.infoText}>{user.gender}</div> <IconEdit2 className={styles.iconEdit} onClick={() => setEditGenderMode(true)} />
							</div>
					}
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo
