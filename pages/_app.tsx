import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import {GlobalStyle} from "../utils/baseStyles"
import {Toaster} from "react-hot-toast"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Techinover</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
      <Toaster
        position="bottom-center"
        toastOptions={{
          success:{
            style:{
              background: '#10B981',
              color: "#ffffff"
            }
          },
          error:{
            style:{
              background: "#EF4444",
              color: "#ffffff"
            }
          }
        }}
      />
    </>
  )
}

export default MyApp
