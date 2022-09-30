import React, { FC } from 'react'
import { IDish } from '../../models/IDish'
import { IUser } from '../../models/IUser'
import Image from 'next/image'

interface DishItemProps {
	dish: IDish
}

const DishItem: FC<DishItemProps> = ({dish}) => {


	return (
		<div style={{color: 'red', fontSize: 13}}>
			{dish.id}
			{dish.name}
			{dish.price}

		</div>
	)
}

export default DishItem
