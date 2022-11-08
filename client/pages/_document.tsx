import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import React from 'react'

export default class CustomDocument extends Document {
	render() {
		return <Html>
			<Head>
				<title>{'Tai Pho'}</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>

		</Html>
	}
}
