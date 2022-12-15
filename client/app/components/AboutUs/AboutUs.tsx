import React, { useState } from 'react'
import styles from './AboutUs.module.scss'
import IconHomeMapMarker from '../../../public/icons/HomeMap'
import Link from 'next/link'
import { useOutside } from '../../hooks/useOutside'
import BookForm from '../BookForm/BookForm'


const AboutUs = () => {

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.aboutUs}>
			<div className={styles.deliveryAboutWrapper}>
				<span className={styles.spanDelivery}></span>
				<div className={styles.deliveryInfoHeadingWrapper}>
					<IconHomeMapMarker className={styles.homeMapMarker} />
					<div className={styles.deliveryInfoHeading}>
						To find out the minimum order value for free shipping or shipping cost, click on your area on the map
					</div>
				</div>

			</div>
			<div className={styles.aboutUsWrapper}>
				<div className={styles.shef}>
					<img className={styles.imgShef}
							 src='https://thumb.tildacdn.com/tild3232-3539-4031-b564-643164643438/-/resize/442x/-/format/webp/shef.jpg'
							 alt='Shef' />
				</div>
				<div className={styles.heroBlockAndBookButtonWrapper}>
					<div className={styles.heroBlockAboutUsWrapper}>
						<div className={styles.heroBlockAboutUs}>
							<div className={styles.textWrapperAboutUs}>
								<div className={styles.headingAboutUs} id={'about-us'}>
									About Us
								</div>
								<div className={styles.aboutUsText1}>
									«If you have made an order for the first time in Mint Karas, then today is the day when you will
									truly fall in love with Pan-Asian cuisine. If you have already tried our cuisine and returned
									again, then you know a lot about panasia. Every day, our entire team strives to make it so.
								</div>
								<span className={styles.sep1}></span>
								<div className={styles.aboutUsText1}>
									We are constantly looking for new solutions, we select ingredients. Moderately exotic for Siberia,
									and most importantly - high quality. We order products in Pan-Asia countries to preserve the true
									taste.
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
						<div className={styles.parent}>
							<button onClick={() => setIsOpen(true)}>
								Reserve a table
							</button>
							{isOpen && <BookForm setIsOpen={setIsOpen} isOpen={isOpen}/>}
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
