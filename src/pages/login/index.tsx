import Image from "next/image";
import Header from "../components/Header";
import Helmet from "../components/Helmet";
import SignIn from "./SignIn";

export default function Login() {
  return (
    <>
      <Helmet />
      <Header />

      <div className="absolute inset-0 -top-[76px] -z-10 hidden overflow-hidden md:block">
        <Image
          src="/images/banner.jpg"
          fill
          alt="banner"
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 -top-[76px] -z-10 bg-black md:opacity-60" />

      <SignIn />
    </>
  );
}
