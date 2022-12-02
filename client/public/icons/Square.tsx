import * as React from 'react'

function IconSquare(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill='currentColor'
			viewBox='0 0 16 16'
			height='1em'
			width='1em'
			{...props}
		>
			<path
				d='M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z' />
		</svg>
	)
}

export default IconSquare