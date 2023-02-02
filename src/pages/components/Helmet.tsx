import Head from "next/head";
import { ReactNode } from "react";

interface HelmetProps {
  children?: ReactNode;
}

const Helmet = ({ children }: HelmetProps) => {
  return (
    <Head>
      <title>Netflix</title>
      <meta
        name="description"
        content="Netflix clone bootstrapped with create next app"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
};

export default Helmet;
