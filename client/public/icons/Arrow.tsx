import * as React from 'react'

function IconArrows_right(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox='0 0 64 64'
			fill='currentColor'
			height='1em'
			width='1em'
			{...props}
		>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinejoin='bevel'
				strokeMiterlimit={10}
				strokeWidth={2}
				d='M27 15l17 17-17 17'
			/>
		</svg>
	)
}

export default IconArrows_right