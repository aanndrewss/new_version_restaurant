import React from 'react'
import styles from '../../../styles/Profile.module.scss'
import IconAdd from '../../../icons/Add'
import AddressItem from './AddressesItem'

const AddressesInfo = ({addresses}) => {
	return (
		<div>
			<div className={styles.addresses}>
				<div className={styles.addressesWrapperHeading}>
					<h2 className={styles.addressesHeading}>Addresses</h2>
					<IconAdd />
				</div>
				{addresses.length === 0 ? <h2>You dont have address!</h2> :
					addresses.map((address) => <AddressItem key={address.id} {...address}/>)
				}
			</div>
		</div>
	)
}

export default AddressesInfo
