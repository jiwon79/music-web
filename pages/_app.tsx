import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

import * as ga from '../lib/ga';
import '../styles/globals.css'
import 'react-quill/dist/quill.snow.css'
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp
