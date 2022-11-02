import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import cart from '../icons/Cart'

export default function Home() {

	return (
		<>
			<div className={styles.heroBlock}>
				<div className={styles.wrapper}>
					<div className={styles.contentWrapper}>
						<Link href={'/'}>
							<button className={styles.bookBtn}>
								Reserve a table
							</button>
						</Link>
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
			<div className={styles.wrapper}>
				<div className={styles.stockWrapper}>
					<div className={styles.stockHeading}>
						Stocks
					</div>
					<span className={styles.spanStock}></span>
				</div>
				<div className={styles.cardWrapper}>
					<div className={styles.card}>
						<div className={styles.cardWrapperContent}>
							<div className={styles.cardHeading}>
								-10% for pickup
							</div>
							<div className={styles.timeForPickUp}>
								Everyday from 10:00 to 21:00
							</div>
						</div>

					</div>
				</div>
			</div>
		</>
	)
}
