import "@/styles/globals.css";
import localFont from "@next/font/local";
import type { AppProps } from "next/app";

const netflixFont = localFont({
  src: [
    {
      path: "./fonts/NetflixSans_W_Md.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NetflixSans_W_Rg.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      id="main app"
      className={`${netflixFont.className} relative h-full min-h-screen bg-black`}
    >
      <Component {...pageProps} />
    </main>
  );
}
