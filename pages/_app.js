import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '@/components/Navigation';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <Navigation>
      <Head>
        <title>Desafio Front-End</title>
      </Head>
      <Component {...pageProps} />
    </Navigation>
  );
}
