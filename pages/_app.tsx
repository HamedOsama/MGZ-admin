import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import NextNProgress from 'nextjs-progressbar';


import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
