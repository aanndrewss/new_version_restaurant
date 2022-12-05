import React, { FC } from 'react'
import styles from './Address.module.scss'
import IconEdit2 from '../../../../public/icons/Edit'
import IconDelete from '../../../../public/icons/Delete'
import { addressAPI } from '../../../../services/AddressService'
import { IAddress } from '../../../models/IAddress'

interface IAddressItemProps {
	address: IAddress,
	userId: number,
	setEditMode: (editMode: boolean) => void,
	setEditValues: (editValues: IAddress) => void,
}

const AddressItem: FC<IAddressItemProps> = ({ address, userId, setEditMode, setEditValues }) => {

	const [deleteAddress, {}] = addressAPI.useDeleteAddressMutation()

	const handleDelete = () => {
		const values = {
			id: address.id,
			userId: userId,
			city: address.city,
			street: address.street,
			home: address.home
		}
		deleteAddress(values)
	}

	const handleClick = () => {
		setEditValues({
			id: address.id,
			city: address.city,
			street: address.street,
			home: address.home
		})
		setEditMode(true)
	}

	return (
		<>
			<div className={styles.addressItem}>
				<div className={styles.addressText}>
					{address.city}, {address.street}, {address.home}
				</div>
				<div className={styles.addressIcons}>
					<IconEdit2 className={styles.icons} onClick={handleClick} />
					<IconDelete className={styles.iconDelete} onClick={handleDelete} />
				</div>
			</div>
		</>
	)
}

export default AddressItem
