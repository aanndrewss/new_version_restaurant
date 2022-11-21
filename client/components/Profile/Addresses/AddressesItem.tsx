import React from 'react'
import styles from '../../../styles/Profile.module.scss'
import IconEdit2 from '../../../icons/Edit'
import IconDelete from '../../../icons/Delete'

const AddressItem = ({city, street, home}) => {
	return (
		<div className={styles.addressItemWrapper}>
			<div className={styles.addressItem}>
				<div className={styles.addressText}>{city}, {street}, {home}</div> <div className={styles.addressIcons}><IconEdit2/><IconDelete/></div>
			</div>
		</div>
	)
}

export default AddressItem
