import React, { FC } from 'react'
import { IAddress } from '../../models/IAddress'
import styles from './Order.module.scss'

interface IOrderAddressItemProps {
	address: IAddress
	setValues: (values: IAddress) => void,
}

const OrderAddressItem: FC<IOrderAddressItemProps> = ({ address, setValues }) => {

	const handleClick = () => {
		setValues({
			id: address.id,
			city: address.city,
			street: address.street,
			home: address.home
		})
	}

	return (
		<>

			<div className={styles.addressItem} onClick={handleClick}>
				{address.city}, {address.street}, {address.home}
			</div>
		</>
	)
}

export default OrderAddressItem
