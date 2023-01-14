// Layout/container used for the main mostly empty landing page, can be used for related pages (credits, about, etc.)

import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  Variants,
} from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";

interface HomeLayoutProps {
  children: React.ReactNode;
}

function HomeLayout(props: HomeLayoutProps) {
  // get the current route for animation purposes
  const router = useRouter();
  return (
    <m.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={containerVariants}
    >
      <Head>
        <title>anny&apos;s list</title>
        <meta name="description" content="this is anny's list" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#c084fc" />
        <meta property="og:title" content="anny's list" />
        <meta property="og:description" content="this is anny's list" />
        <meta property="og:image" content="/img/art/906.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="anny's list" />
      </Head>

      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <m.div
            key={router.route.concat("layout-fade")}
            className="h-screen w-screen overflow-y-scroll"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {props.children}
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </m.div>
  );
}

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default HomeLayout;
