import type { AppProps } from 'next/app'
import { ChakraProvider, theme } from '@chakra-ui/react'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
