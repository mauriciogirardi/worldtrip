import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import 'styles/swiper.css'
import 'swiper/css/bundle'

import { theme } from 'styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>WorldTrip</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
