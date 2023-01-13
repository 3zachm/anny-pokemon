import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait" initial={false}>
        {getLayout(<Component {...pageProps} />)}
      </AnimatePresence>
    </LazyMotion>
  );
}
