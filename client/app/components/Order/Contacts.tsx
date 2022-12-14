import React, { FC } from 'react'
import styles from './Order.module.scss'


interface IContactsProps {
	phone: string
}

const Contacts: FC<IContactsProps> = ({ phone }) => {
	return (
		<>
			<h2>Your contacts</h2>
			<h3>Phone number</h3>
			<input className={styles.phoneNumber}
				value={phone}
			/>
		</>

	)
}

export default Contacts
