import React from 'react'
import styles from './Footer.module.scss'
import wrapper from '../../../styles/Home.module.scss'
import IconInstagram from '../../../public/icons/Instagram'
import IconVk from '../../../public/icons/vk'
import IconBxlTelegram from '../../../public/icons/tg'
import Link from 'next/link'
import { HOME_ROUTE } from '../../utils/contstants'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={wrapper.wrapper}>
				<div className={styles.footerWrapper}>
					<div className={styles.brandName}>
						TAI PHO
					</div>
					<div className={styles.footerLinks}>
						<div className={styles.footerLinks1}>
							<div className={styles.link}>
								Personal data processing policy
							</div>
							<Link href={HOME_ROUTE + '#about-us'}>
								<div className={styles.link}>
									About Us
								</div>
							</Link>
							<div className={styles.link}>
								Work
							</div>
						</div>
						<div className={styles.footerLinks1}>
							<div className={styles.link}>
								Payment Information
							</div>
							<div className={styles.link}>
								Franchise
							</div>
							<div className={styles.link}>
								Help
							</div>
						</div>
					</div>
					<div className={styles.contacts}>
						<div className={styles.contactsHeading}>
							Contacts
						</div>
						<div className={styles.contactsBlock}>
							<div className={styles.contact}>
								(383) 227 16 15
							</div>
							<div className={styles.contact}>
								(383) 375 88 10
							</div>
							<div className={styles.contact}>
								(383) 304 91 05
							</div>
						</div>
					</div>
				</div>
				<span className={styles.sep}></span>
				<div className={styles.footerWrapper}>
					<div className={styles.rights}>
						<div className={styles.madeBy}>
							by andrxw66 ©
						</div>
						<div className={styles.year}>
							2022
						</div>
					</div>
					<div className={styles.footerSocials}>
						<div className={styles.footerSocial}>
							<IconInstagram />
						</div>
						<div className={styles.footerSocial}>
							<IconVk />
						</div>
						<div className={styles.footerSocial}>
							<IconBxlTelegram />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
