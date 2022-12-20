import * as React from 'react'

function IconLogout(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			height='1.2em'
			width='1.2em'
			{...props}
		>
			<path
				d='M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012 2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h9z' />
		</svg>
	)
}

export default IconLogout
