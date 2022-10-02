import React from 'react'
import styles from './../styles/Header.module.scss'
import { FaAccessibleIcon } from 'react-icons/fa'

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperHeader}>
				<div className={styles.header}>
					<div className={styles.brandName}>
						<FaAccessibleIcon />
						LI
					</div>
					<div className={styles.headerLinks}>
						<button className={styles.btnLinks}>
							home
						</button>
						<button className={styles.btnLinks}>
							menu
						</button>
					</div>
					<div className={styles.enterLinks}>
						<button className={styles.btnEnter}>
							LOGIN
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
