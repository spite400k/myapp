import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { initializeFirebaseApp } from '../utils/firebase/init'
// import { getApp } from 'firebase/app'

// initializeFirebaseApp()
export default function App({ Component, pageProps }: AppProps) {
  // console.log(getApp())
  return <Component {...pageProps} />
}
