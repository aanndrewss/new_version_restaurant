import React, { FC } from 'react'
import styles from './ModalOrderComplete.module.scss'
import { Dialog } from '@headlessui/react'

interface IProps {
	setIsOpen: (isOpen: boolean) => void
	setIsOpen1: (isOpen: boolean) => void
	isOpen: boolean
}

const ModalOrderComplete: FC<IProps> = ({ setIsOpen, isOpen, setIsOpen1 }) => {

	const handleClick = () => {
		setIsOpen(false)
		setIsOpen1 && setIsOpen1(false)
	}

	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<div className={styles.bg}>
				<Dialog.Panel className={styles.popupWindow}>
					<Dialog.Title className={styles.heading}>
						Successfully!
					</Dialog.Title>
					<div className={styles.details}>
						Manager will callback to you later!
					</div>
					<button onClick={handleClick}>Close</button>
				</Dialog.Panel>
			</div>
		</Dialog>
	)
}

export default ModalOrderComplete
