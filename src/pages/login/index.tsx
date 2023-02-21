import Image from "next/image";
import Header from "../components/Header";
import Helmet from "../components/Helmet";
import Footer from "../home/Footer";
import SignIn from "./SignIn";

export default function Login() {
  return (
    <>
      <Header />
      <Helmet />
      <div className="relative z-20 md:flex md:min-h-[calc(100vh_-_68px)] md:flex-col">
        <SignIn />
        <Footer
          definedItems={[
            "FAQ",
            "Help Center",
            "Terms of Use",
            "Privacy",
            "Cookie Preferences",
            "Corporate Information",
          ]}
          className="mt-14 border-t-2 border-zinc-500 bg-black bg-opacity-50 text-sm md:mt-0 md:h-full md:border-none"
        />
      </div>

      <div className="absolute top-0 z-10 hidden h-full min-h-screen w-full overflow-hidden bg-cover md:block">
        <Image
          src="/images/banner.jpg"
          fill
          alt="banner"
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute top-0 z-10 h-full min-h-screen w-full bg-black md:opacity-60" />
    </>
  );
}
