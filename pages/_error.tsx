import { m, Variants } from "framer-motion";
import { NextPageContext } from "next";
import Link from "next/link";
import { ReactElement } from "react";
import HomeLayout from "../layouts/HomeLayout";

interface ErrorProps {
  statusCode: number;
}

function Error(props: ErrorProps) {
  let errorCode: string;
  // if status exists, set error code to status string else set to unknown error
  props.statusCode
    ? (errorCode = props.statusCode.toString())
    : (errorCode = "Unknown Error");
  return (
    <m.div className="fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-black">
      <m.div className="m-2 flex flex-row" variants={containerVariants}>
        {Array.from(errorCode).map((char, index) => {
          return (
            <m.div
              key={index}
              className="text-center text-9xl font-bold"
              variants={itemVariants}
            >
              {char}
            </m.div>
          );
        })}
      </m.div>
      <m.div>
        <Link href="/">
          <m.p
            className="m-2 text-center text-2xl text-zinc-500"
            variants={pVariants}
            whileHover={{
              color: "white",
            }}
          >
            go home...
          </m.p>
        </Link>
      </m.div>
    </m.div>
  );
}

const containerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 100,
    },
  },
};

const pVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      type: "spring",
      stiffness: 50,
      delay: 2,
    },
  },
};

Error.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
