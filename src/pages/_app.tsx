import type { AppProps } from 'next/app';
import Layout from '../components/layouts/main';
import '../app/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
