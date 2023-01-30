import { Inter } from "@next/font/google";
import Head from "next/head";
import Greetings from "./greetings";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta
          name="description"
          content="Netflix clone bootstrapped with create next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Greetings />
      </main>
    </>
  );
}
