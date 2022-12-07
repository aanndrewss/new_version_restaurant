import styles from '../styles/Home.module.scss'
import React from 'react'
import Meta from '../app/Meta'
import HeroBlock from '../app/components/HeroBlock/HeroBlock'
import Stocks from '../app/components/Stocks/Stocks'
import DeliveryTerms from '../app/components/DeliveryTerms/DeliveryTerms'
import AboutUs from '../app/components/AboutUs/AboutUs'


export default function Home() {

	return (
		<>
			<Meta title={'TAI PHO | BEST RESTAURANT'} />
			<HeroBlock />
			<div className={styles.wrapper}>
				<Stocks />
				<DeliveryTerms />
				<AboutUs />
			</div>
		</>
	)
}
