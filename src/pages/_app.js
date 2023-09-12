import Head from 'next/head';

import '@/styles/index.sass';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Space Tourism</title>
        <meta name="description" content="a Frontend Mentor project" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
