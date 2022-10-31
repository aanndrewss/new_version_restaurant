import React from 'react'
import { typeAPI } from '../services/TypeService'
import styles from '../styles/Types.module.scss'
import IconArrowRightCircle from '../icons/Arrow'
import IconSquare from '../icons/Square'

const TypeBar = () => {

	const { data: types, error, isLoading } = typeAPI.useFetchTypesQuery('')

	return (
		<>
			<div className={styles.menu}>
				<input type='checkbox' id='hmt' className={styles.hiddenMenuTicker} />
				<label htmlFor='hmt' className={styles.menuBtn}>
					<span className={styles.first}></span>
					<span className={styles.second}></span>
					<span className={styles.third}></span>
				</label>
				<div className={styles.menuBar}>
					<p className={styles.menuTitle}>MENU</p>
				</div>
				<ul className={styles.hiddenMenu}>
					<div className={styles.hiddenMenuTitleWrapper}>
						<div className={styles.square}><IconSquare/></div>
						<div className={styles.hiddenMenuTitle}>
							Menu
						</div>
					</div>

					{types && types.map(type =>
						<>
							<li className={styles.type}>
								<div className={styles.typeWrapper}>
									<div className={styles.arrow}><IconArrowRightCircle/></div>{type.name}
								</div>

							</li>
							<span className={styles.separator}></span>
						</>
					)}
				</ul>
			</div>
		</>
	)
}

export default TypeBar
