import React, { useCallback, useRef, useState } from 'react'
import styles from './Orders.module.scss'
import OrderItem from './OrderItem'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Swiper as SwiperType, Navigation, Pagination } from 'swiper'
import IconBxRightArrow from '../../../icons/NextArrowIcon'
import IconBxLeftArrow from '../../../icons/PrevArrowIcon'


const OrdersInfo = ({ orders }) => {
	const sliderRef = useRef(null)

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slidePrev()
	}, [])

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slideNext()
	}, [])
	const [reachEnd, setReachEnd] = useState(false)
	const [reachStart, setReachStart] = useState(false)
	const handleChange = () => {
		setReachStart(false)
		setReachEnd(false)
	}
	return (
		<div>
			<div className={styles.orders}>
				<div className={styles.ordersWrapperHeading}>
					<h2 className={styles.ordersHeading}>Orders</h2>
				</div>
				<div className={styles.swiperWrapper}>
					<button disabled={reachStart} className={styles.prevArrow} onClick={handlePrev}><IconBxLeftArrow /></button>
					<Swiper
						spaceBetween={10}
						slidesPerView={2}
						className={styles.swiper}
						modules={[Navigation]}
						ref={sliderRef}
						onReachEnd={() => setReachEnd(true)}
						onReachBeginning={() => setReachStart(true)}
						onInit={() => setReachStart(true)}
						onFromEdge={handleChange}

						slidesOffsetAfter={40}
					>
						{orders && orders.length === 0 ? <h2 className={styles.notHaveSmth}>You don't have orders!</h2> :
							orders && orders.map((order) =>
								<SwiperSlide className={styles.slide} key={order.id}>
									<OrderItem {...order} />
								</SwiperSlide>
							)
						}
					</Swiper>
					<button disabled={reachEnd} className={styles.nextArrow} onClick={handleNext}><IconBxRightArrow /></button>
				</div>

			</div>
		</div>
	)
}

export default OrdersInfo
