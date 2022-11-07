import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import cart from '../icons/Cart'
import Image from 'next/image'
import freeWok from '../assets/freeWok.jpg'
import IconTimetable from '../icons/Term1'
import IconTruckDelivery from '../icons/Term2'
import IconCash from '../icons/Term3'
import IconBxMap from '../icons/Map'
import IconHomeMapMarker from '../icons/HomeMap'

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

				<div className={styles.aboutUs}>
					<div className={styles.deliveryAboutWrapper}>
						<span className={styles.spanDelivery}></span>
						<div className={styles.deliveryInfoHeadingWrapper}>
							<IconHomeMapMarker className={styles.homeMapMarker}/>
							<div className={styles.deliveryInfoHeading}>
								To find out the minimum order value for free shipping or shipping cost, click on your area on the map
							</div>
						</div>

					</div>
					<div className={styles.aboutUsWrapper}>
						<div className={styles.shef}>
							<img className={styles.imgShef} src='https://thumb.tildacdn.com/tild3232-3539-4031-b564-643164643438/-/resize/442x/-/format/webp/shef.jpg' alt='Shef' />
						</div>
						<div className={styles.heroBlockAndBookButtonWrapper}>
							<div className={styles.heroBlockAboutUsWrapper}>
								<div className={styles.heroBlockAboutUs}>
									<div className={styles.textWrapperAboutUs}>
										<div className={styles.headingAboutUs} id={'about-us'}>
											About Us
										</div>
										<div className={styles.aboutUsText1}>
											«If you have made an order for the first time in Mint Karas, then today is the day when you will truly fall in love with Pan-Asian cuisine. If you have already tried our cuisine and returned again, then you know a lot about panasia. Every day, our entire team strives to make it so.
										</div>
										<span className={styles.sep1}></span>
										<div className={styles.aboutUsText1}>
											We are constantly looking for new solutions, we select ingredients. Moderately exotic for Siberia, and most importantly - high quality. We order products in Pan-Asia countries to preserve the true taste.
										</div>
										<div className={styles.aboutUsText1}>
											We make sure that by ordering dishes in the «TAI PHO» you enjoy the moment and please yourself.
										</div>
										<div className={styles.aboutUsText2}>We are waiting for your visit!»</div>
										<div className={styles.wrapperTextChef}>
											<div className={styles.brandChefText}>Brand Chef of TAI PHO Stanislav An</div>
										</div>

									</div>
								</div>
							</div>
							<div className={styles.bookBtnWrapper}>
								<div className={styles.bookBtnHeading}>
									Here you can reserve a table
								</div>
								<div className={styles.bookBtnInfo}>
									Manager will callback to you
								</div>
								<Link href={'/'}>
									<button className={styles.bookBtn1}>
										<div className={styles.btnText}>Reserve a table</div>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
