import styles from '../styles/Home.module.scss'
import Link from 'next/link'

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
		</>
	)
}
