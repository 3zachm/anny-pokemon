import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import HomeLayout from "../layouts/HomeLayout";

function Home() {
  return (
    <>
      <Head></Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold">hi</h1>
        </main>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
