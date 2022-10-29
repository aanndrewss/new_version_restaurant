import React from 'react'
import { typeAPI } from '../services/TypeService'
import styles from '../styles/Types.module.scss'

const TypeBar = () => {

	const { data: types, error, isLoading } = typeAPI.useFetchTypesQuery('')

	return (
		<>
			<div className={styles.menu}>
				<input type='checkbox' id='hmt' className={styles.hiddenMenuTicker}/>
				<label htmlFor='hmt' className={styles.menuBtn}>
					<span className={styles.first}></span>
					<span className={styles.second}></span>
					<span className={styles.third}></span>
				</label>
				<div className={styles.menuBar}>
					<p className={styles.menuTitle}>MENU</p>
				</div>
				<ul className={styles.hiddenMenu}>
					{types && types.map(type =>
						<li className={styles.type}>
							{type.name}
						</li>
					)}
				</ul>
			</div>
		</>
	)
}

export default TypeBar
