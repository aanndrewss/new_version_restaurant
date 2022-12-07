import React from 'react'
import styles from './Stocks.module.scss'
import Image from 'next/image'
import freeWok from '../../../public/assets/freeWok.jpg'

const Stocks = () => {
	return (
		<>
			<div className={styles.stockWrapper}>
				<div id={'stock'} className={styles.stockHeading}>
					Stocks
				</div>
				<span className={styles.spanStock}></span>
			</div>
			<div className={styles.imgAndCardsWrapper}>
				<div className={styles.cardWrapper}>
					<div className={styles.card1}>
						<div className={styles.cardWrapperContent}>
							<div className={styles.cardHeading}>
								- 10% for pickup
							</div>
							<div className={styles.secondText}>
								Everyday from 10:00 to 21:00
							</div>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.cardWrapperContent}>
							<div className={styles.cardHeading}>
								- 10% for your Birth Day
							</div>
							<div className={styles.secondText}>
								In restaurant
							</div>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.cardWrapperContent}>
							<div className={styles.cardHeading}>
								We give a WOK with chicken
							</div>
							<div className={styles.secondText}>
								Wher ordering from 39$
							</div>
						</div>
					</div>
				</div>
				<Image className={styles.images} width={560} height={318} src={freeWok} alt='Gift' />
			</div>
		</>
	)
}

export default Stocks
