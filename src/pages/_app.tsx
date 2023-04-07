import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ChakraProvider, theme } from '@chakra-ui/react'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNProgress />
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	)
}
