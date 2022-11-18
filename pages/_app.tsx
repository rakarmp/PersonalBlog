import "../styles/global.css";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Loading from '../components/loading';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)

  useEffect(function(){
    setLoading(false)
  }, [])

  return (
    <>
    {!loading ? (
      <Component {...pageProps} />
    ): (
      <Loading />
    )}
    </>
  )
}
