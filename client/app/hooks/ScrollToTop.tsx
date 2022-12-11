import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const ScrollToTop = () => {

	const router = useRouter()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [router.pathname])

	return null
}

export default ScrollToTop
