import React from 'react'
import wrapper from '../../../styles/Home.module.scss'
import styles from './HeroBlock.module.scss'
import Link from 'next/link'
import { useOutside } from '../../hooks/useOutside'
import cn from 'classnames'
import BookForm from '../BookForm/BookForm'

const HeroBlock = () => {

	const {ref, isShow, setIsShow} = useOutside(false)

	return (
		<div className={styles.heroBlock}>
			<div className={wrapper.wrapper}>
				<div className={styles.contentWrapper}>
					<div className={styles.parent} ref={ref}>
						<button onClick={() => setIsShow(!isShow)}>
							Reserve a table
						</button>
						{isShow && <BookForm setIsShow={setIsShow}/>}
					</div>
					<div className={styles.titlesWrapper}>
						<div className={styles.titles}>
							<div className={styles.title}>
								PANASIAN RESTAURANT.
							</div>
							<div className={styles.title1}>
								Cooking panasian meals.
							</div>
							<span className={styles.separator}></span>
							<div className={styles.timeClock}>
								from 10:00 to 21:00.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

}

export default HeroBlock