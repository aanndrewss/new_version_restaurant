import { useEffect, useRef, useState } from 'react'


export const useOutside = (initialIsVisible: boolean) => {
	const [isShow, setIsShow] = useState(initialIsVisible)
	const ref = useRef(null)

	const handleClickOutside = (event: { target: any }) => {
		// @ts-ignore
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return { ref, isShow, setIsShow }
}