import React from 'react'
import styles from './DeliveryTerms.module.scss'
import IconTimetable from '../../../public/icons/Term1'
import IconTruckDelivery from '../../../public/icons/Term2'
import IconCash from '../../../public/icons/Term3'
import IconBxMap from '../../../public/icons/Map'
import Link from 'next/link'


const DeliveryTerms = () => {
	return (
		<>
			<div className={styles.stockWrapper}>
				<div id={'delivery'} className={styles.stockHeading}>
					Delivery
				</div>
				<span className={styles.spanStock}></span>
			</div>
			<div className={styles.termsAndCityWrapper}>
				<div className={styles.termsWrapper}>
					<div className={styles.term}>
						<div className={styles.termSvg}><IconTimetable /></div>
						<div className={styles.termHeadings}>
							<div className={styles.termHeading1}>
								Time for orders deliver
							</div>
							<div className={styles.termHeading2}>
								Everyday
								from 12:00 to 23:00
							</div>
						</div>
					</div>
					<div className={styles.term}>
						<div className={styles.termSvg}><IconTruckDelivery /></div>
						<div className={styles.termHeadings}>
							<div className={styles.termHeading1}>
								Free delivery
							</div>
							<div className={styles.termHeading2}>
								Available with a minimum order of 600 rubles
							</div>
						</div>
					</div>
					<div className={styles.term}>
						<div className={styles.termSvg}><IconCash /></div>
						<div className={styles.termHeadings}>
							<div className={styles.termHeading1}>
								Cash/non-cash payment
							</div>
						</div>
					</div>
				</div>
				<div className={styles.mapsWrapper}>
					<div className={styles.mapsHeading}>
						Delivery cards
					</div>
					<div className={styles.citiesWrapper}>
						<div className={styles.cityWrapper}>
							<div className={styles.mapSvg}>
								<IconBxMap />
							</div>
							<Link href={'https://yandex.ru/maps/-/CCU65TS4lB'}>
								<div className={styles.city}>
									Novosibirsk
								</div>
							</Link>
						</div>
						<div className={styles.cityWrapper}>
							<div className={styles.mapSvg}>
								<IconBxMap />
							</div>
							<Link href={'/'}>
								<div className={styles.city}>
									Kazan
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DeliveryTerms
