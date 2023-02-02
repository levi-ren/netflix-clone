import Image from "next/image";
import { useState } from "react";
import Register from "./Register";

const items = [
  {
    summary: "What is Netflix?",
    details:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    summary: "How much does Netflix cost?",
    details:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₱149 to ₱549 a month. No extra costs, no contracts.",
  },
  {
    summary: "Where can I watch?",
    details:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. \n\nYou can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    summary: "How do I cancel?",
    details:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    summary: "What can I watch on Netflix?",
    details:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
  },
  {
    summary: "Is Netflix good for kids?",
    details:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(-1);
  return (
    <section id="FAQ" className="border-b-8 border-[#222] bg-black">
      <div className="m-auto mb-4 pt-14 text-white sm:mb-7 lg:mb-16">
        <p className="m-2 mb-4 px-6 text-center text-2xl font-semibold sm:mb-7 sm:text-4xl lg:mb-16 lg:text-5xl">
          Frequently Asked Questions
        </p>

        <ul>
          {items.map((item, i) => (
            <li
              key={i}
              className="m-auto mb-2 max-w-[480px] divide-y divide-black bg-stone-800 text-lg md:max-w-[600px]  md:text-xl lg:max-w-[750px] lg:text-2xl"
            >
              <button
                className="flex w-full items-center justify-between p-4 lg:p-6"
                onClick={() => setActive(i === active ? -1 : i)}
              >
                {item.summary}
                <Image
                  src="/icons/chevron.svg"
                  height={20}
                  width={20}
                  alt="logo"
                  className={`${active === i ? "-rotate-270" : "-rotate-180"}`}
                />
              </button>
              <p
                className={`overflow-hidden whitespace-pre-line  transition-all ${
                  active === i ? "max-h-[700px] p-4" : "max-h-0"
                }`}
              >
                {item.details}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="m-auto my-16 max-w-lg px-5 text-center text-white md:max-w-[640px]">
        <Register />
      </div>
    </section>
  );
}
