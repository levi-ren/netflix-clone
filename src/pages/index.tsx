import { Inter } from "@next/font/google";
import Header from "./components/Header";
import Helmet from "./components/Helmet";
import DownloadShows from "./home/DownloadShows";
import EnjoyTv from "./home/EnjoyTv";
import FAQ from "./home/FAQ";
import Footer from "./home/Footer";
import Greetings from "./home/Greetings";
import Kids from "./home/Kids";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Helmet />
      <>
        <Header />
        <Greetings />
        <EnjoyTv />
        <DownloadShows />
        <Kids />
        <FAQ />
        <Footer />
      </>
    </>
  );
}
