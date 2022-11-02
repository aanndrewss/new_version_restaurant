import React from 'react'
import { typeAPI } from '../services/TypeService'
import styles from '../styles/Types.module.scss'
import IconArrowRightCircle from '../icons/Arrow'
import { useDispatch } from 'react-redux'
import { setSelectedType } from '../store/reducers/TypeSlice'
import Link from 'next/link'
import { MENU_ROUTE } from '../utils/contstants'
import IconSilverwareForkKnife from '../icons/Cutlery'

const TypeBar = () => {

	const { data: types, error, isLoading } = typeAPI.useFetchTypesQuery('')
	const dispatch = useDispatch()

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
						<div className={styles.square}><IconSilverwareForkKnife /></div>
						<div className={styles.hiddenMenuTitle}>
							Menu
						</div>
					</div>
					<Link href={MENU_ROUTE}>
						<button onClick={() => dispatch(setSelectedType({}))} className={styles.type}>
							<div className={styles.typeWrapper}>
								<div className={styles.arrow}><IconArrowRightCircle /></div>
								ALL
							</div>
						</button>
					</Link>
					{types && types.map(type =>
						<>
							<Link href={MENU_ROUTE}>
								<button onClick={() => dispatch(setSelectedType(type))} className={styles.type}>
									<div className={styles.typeWrapper}>
										<div className={styles.arrow}><IconArrowRightCircle /></div>
										{type.name}
									</div>
								</button>
							</Link>
							<span className={styles.separator}></span>
						</>
					)}
				</ul>
			</div>
		</>
	)
}

export default TypeBar
