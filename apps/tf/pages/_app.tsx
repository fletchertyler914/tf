import { Layout } from '@tf/ui';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const component = <Component {...pageProps} />;
  const router = useRouter();
  const realm = router.pathname.split('/')[1];

  return realm ? <Layout>{component}</Layout> : component;
};

export default CustomApp;
