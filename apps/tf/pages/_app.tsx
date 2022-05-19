import { Layout } from '@tf/ui';
import { SolanaProvider } from '@tf/utils';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const component = <Component {...pageProps} />;
  const router = useRouter();
  const realm = router.pathname.split('/')[1];

  return (
    <>
      <Script strategy="beforeInteractive" src="scripts/theme.js" />
      <SolanaProvider>
        {realm ? <Layout>{component}</Layout> : component}
      </SolanaProvider>
    </>
  );
};

export default CustomApp;
