import React, { FC } from 'react'
import { Dialog } from '@headlessui/react'
import styles from './ModalDish.module.scss'
import Image from 'next/image'
import { IDish } from '../../../../models/IDish'
import { IAddDish } from '../../../../models/IAddDish'

interface IModalDishProps {
	setIsOpen: (isOpen: boolean) => void
	isOpen: boolean
	dish: IDish
	values: IAddDish
	addItem: (values: IAddDish) => void
}

const ModalDish: FC<IModalDishProps> = ({ isOpen, setIsOpen, dish, addItem, values}) => {

	const handleClick = () => {
		setIsOpen(false)
		addItem(values)
	}

	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<div className={styles.bg}>
				<Dialog.Panel className={styles.popupWindow}>
					<div className={styles.wrapperDish}>
						<Image className={styles.img} src={'http://localhost:5000/' + dish.img} alt='' width={250} height={200}/>
						<div className={styles.details}>
							<Dialog.Title className={styles.heading}>
								{dish.name}
							</Dialog.Title>
							<button onClick={handleClick}>Buy for {dish.price}₽</button>
						</div>
					</div>
				</Dialog.Panel>
			</div>
		</Dialog>
	)
}

export default ModalDish
