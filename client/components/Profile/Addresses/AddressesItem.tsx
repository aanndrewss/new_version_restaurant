import React from 'react'
import styles from '../../../styles/Profile.module.scss'
import IconEdit2 from '../../../icons/Edit'
import IconDelete from '../../../icons/Delete'

const AddressItem = ({city, street, home, id}) => {
	return (
			<div className={styles.addressItem}>
				<div className={styles.addressText}>
					{city}, {street}, {home}
				</div>
				<div className={styles.addressIcons}>
					<IconEdit2 className={styles.icons}/>
					<IconDelete className={styles.icons}/>
				</div>
			</div>
	)
}

export default AddressItem
