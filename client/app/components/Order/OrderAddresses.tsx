import React, { FC, useState } from 'react'
import { IAddress } from '../../models/IAddress'
import OrderAddressItem from './OrderAddressItem'
import styles from './Order.module.scss'
import OrderAddressForm from './OrderAddressForm'
import { GeolocationControl, Map, YMaps, ZoomControl } from '@pbe/react-yandex-maps'

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
					addresses && addresses.map((address) => <OrderAddressItem key={address.id} address={address}
																																		setValues={setValues} />)
				}
			</div>
			<YMaps>
				<div>
					<Map className={styles.map} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
						<GeolocationControl options={{ float: 'left' }} />
						<ZoomControl options={{ float: 'right' }} />
					</Map>
				</div>
			</YMaps>
			<OrderAddressForm address={values} />
		</div>
	)
}

export default OrderAddresses
