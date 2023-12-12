import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import Provider from "@/myReactRedux/Provider";
import store from "@/state/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
