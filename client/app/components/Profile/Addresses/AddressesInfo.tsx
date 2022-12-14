import React, { FC, useState } from 'react'
import styles from './Address.module.scss'
import IconAdd from '../../../../public/icons/Add'
import AddressItem from './AddressesItem'
import AddAddressForm from './AddAddressForm'
import { IAddress } from '../../../models/IAddress'

interface IAddressProps {
	addresses: IAddress[]
	userId: number
}

const AddressesInfo: FC<IAddressProps> = ({ addresses, userId }) => {

	const [editMode, setEditMode] = useState(false)
	const [addMode, setAddMode] = useState(false)
	const [editValues, setEditValues] = useState({})

	return (
		<div>
			<div className={styles.addresses}>
				<div className={styles.addressesWrapperHeading}>
					<h2 className={styles.addressesHeading}>Addresses</h2>
					<IconAdd className={styles.icons} onClick={() => setAddMode(true)} />
				</div>
				<div className={styles.addressItemWrapper}>
					{addresses && addresses.length === 0 ? <h2>You dont have address!</h2> :
						addresses && addresses.map((address) => <AddressItem key={address.id} address={address} userId={userId}
																																  setEditMode={setEditMode} setEditValues={setEditValues} />)
					}
				</div>
				{editMode || addMode ?
					<AddAddressForm address={editValues} userId={userId} setEditMode={setEditMode} setAddMode={setAddMode}
													editMode={editMode} />
					: null
				}
			</div>
		</div>
	)
}

export default AddressesInfo
