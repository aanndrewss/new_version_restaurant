import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => {
	return (
		<ContentLoader
			speed={2}
			width={250}
			height={500}
			viewBox='0 0 250 500'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			<rect x='0' y='0' rx='15' ry='15' width='238' height='200' />
			<rect x='0' y='210' rx='10' ry='10' width='238' height='50' />
			<rect x='0' y='280' rx='10' ry='10' width='52' height='40' />
			<rect x='0' y='330' rx='10' ry='10' width='52' height='40' />
			<rect x='120' y='305' rx='15' ry='15' width='95' height='40' />
		</ContentLoader>
	)
}

export default Skeleton
