import React, { FC } from 'react'
import Head from 'next/head'

interface IMetaProps {
	title: string
}

const Meta: FC<IMetaProps> = ({ title }) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel='shortcut icon' href='/favicon6.ico' />
		</Head>
	)
}

export default Meta