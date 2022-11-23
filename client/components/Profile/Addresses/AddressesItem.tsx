import React from 'react'
import styles from '../../../styles/Profile.module.scss'
import IconEdit2 from '../../../icons/Edit'
import IconDelete from '../../../icons/Delete'
import { addressAPI } from '../../../services/AddressService'

const AddressItem = ({city, street, home, id, userId, setEditMode}) => {

	const [deleteAddress, {}] = addressAPI.useDeleteAddressMutation()

	const handleDelete = () => {
		const values = {
			id: id,
			userId: userId,
			city: city,
			street: street,
			home: home
		}
		deleteAddress(values)
	}

	return (
		<>
			<div className={styles.addressItem}>
				<div className={styles.addressText}>
					{city}, {street}, {home}
				</div>
				<div className={styles.addressIcons}>
					<IconEdit2 className={styles.icons} onClick={() => setEditMode(true)}/>
					<IconDelete className={styles.iconDelete} onClick={handleDelete}/>
				</div>
			</div>
		</>
	)
}

export default AddressItem
