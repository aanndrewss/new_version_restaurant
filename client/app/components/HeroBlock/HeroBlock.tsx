import React, { useState } from 'react'
import wrapper from '../../../styles/Home.module.scss'
import styles from './HeroBlock.module.scss'
import { useOutside } from '../../hooks/useOutside'
import BookForm from '../BookForm/BookForm'

const HeroBlock = () => {

 const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div className={styles.heroBlock}>
			<div className={wrapper.wrapper}>
				<div className={styles.contentWrapper}>
					<div className={styles.parent} >
						<button onClick={() => setIsOpen(true)}>
							Reserve a table
						</button>
						{isOpen && <BookForm setIsOpen={setIsOpen} isOpen={isOpen}/>}
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
