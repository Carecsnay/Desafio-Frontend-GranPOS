import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';

export default function App({ Component, pageProps }) {
  return (
    <Pagina>
      <Component {...pageProps} />
    </Pagina>
  );
}
