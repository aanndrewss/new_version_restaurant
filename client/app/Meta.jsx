import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

function Meta({title, description}) {
	return (
		<Head>
			<title>{title}</title>
			<meta
				name='description'
				content={description}
			/>
			
			
		</Head>
	)
}

export default Meta