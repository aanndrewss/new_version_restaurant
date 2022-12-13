import React, { FC, useState } from 'react'
import { IAddress } from '../../models/IAddress'
import OrderAddressItem from './OrderAddressItem'
import styles from './Order.module.scss'
import OrderAddressForm from './OrderAddressForm'

interface IOrderAddressesProps {
	addresses: IAddress[]
}

const OrderAddresses: FC<IOrderAddressesProps> = ({ addresses }) => {

	const [values, setValues] = useState({})

	return (
		<div className={styles.card}>
			<h2 className={styles.addressHeading}>Select your address</h2>
			<div className={styles.gridWrapper}>
				{addresses && addresses.length === 0 ? <h2>You dont have address!</h2> :
					addresses && addresses.map((address) => <OrderAddressItem key={address.id} address={address} setValues={setValues}/>)
				}
			</div>
			<OrderAddressForm address={values} />
		</div>
	)
}

export default OrderAddresses
