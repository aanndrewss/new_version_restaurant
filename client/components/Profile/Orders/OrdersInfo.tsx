import React, { useCallback, useRef } from 'react'
import styles from './Orders.module.scss'
import OrderItem from './OrderItem'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Swiper as SwiperType, Navigation } from 'swiper'
import IconBxRightArrow from '../../../icons/NextArrowIcon'
import IconBxLeftArrow from '../../../icons/PrevArrowIcon'


const OrdersInfo = ({ orders }) => {
	const sliderRef = useRef(null);

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);
	return (
		<div>
			<div className={styles.orders}>
				<div className={styles.ordersWrapperHeading}>
					<h2 className={styles.ordersHeading}>Orders</h2>
				</div>
				<div className={styles.swiperWrapper}>
					<button className={styles.prevArrow} onClick={handlePrev}><IconBxLeftArrow/></button>
					<Swiper
						spaceBetween={10}
						slidesPerView={2}
						className={styles.swiper}
						modules={[Navigation]}
						grabCursor={false}
						ref={sliderRef}

					>
						{orders && orders.length === 0 ? <h2 className={styles.notHaveSmth}>You don't have orders!</h2> :
							orders && orders.map((order) =>
								<SwiperSlide className={styles.slide} key={order.id}>
									<OrderItem order={order} />
								</SwiperSlide>
							)
						}
					</Swiper>
					<button className={styles.nextArrow} onClick={handleNext}><IconBxRightArrow/></button>
				</div>

			</div>
		</div>
	)
}

export default OrdersInfo
