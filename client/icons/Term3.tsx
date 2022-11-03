
import * as React from "react";

function IconCash(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="currentColor"
			viewBox="0 0 16 16"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M8 10a2 2 0 100-4 2 2 0 000 4z" />
			<path d="M0 4a1 1 0 011-1h14a1 1 0 011 1v8a1 1 0 01-1 1H1a1 1 0 01-1-1V4zm3 0a2 2 0 01-2 2v4a2 2 0 012 2h10a2 2 0 012-2V6a2 2 0 01-2-2H3z" />
		</svg>
	);
}

export default IconCash;
