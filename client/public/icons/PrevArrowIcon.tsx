import * as React from 'react'

function IconBxLeftArrow(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			height='25px'
			width='25px'
			{...props}
		>
			<path
				d='M18.464 2.114a.998.998 0 00-1.033.063l-13 9a1.003 1.003 0 000 1.645l13 9A1 1 0 0019 21V3a1 1 0 00-.536-.886zM17 19.091L6.757 12 17 4.909v14.182z' />
		</svg>
	)
}

export default IconBxLeftArrow
