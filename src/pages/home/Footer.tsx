const items = [
  "FAQ",
  "Help Center",
  "Account",
  "Media Center",
  "Investor Relations",
  "Jobs",
  "Redeem Gift Cards",
  "Buy Gift Cards",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix",
];

interface FooterProps {
  definedItems?: string[];
  className?: string;
}

const Footer = ({ definedItems, className }: FooterProps) => {
  return (
    <div
      id="footer"
      className={`bg-black px-6 pt-14 pb-8 text-zinc-400 sm:p-16 md:p-20 ${className}`}
    >
      <div className="m-auto max-w-4xl">
        <p className="mb-6">Questions? Contact us.</p>
        <ul>
          {(definedItems || items).map((item) => (
            <li
              key={item}
              className="mb-2 inline-block w-[50%] text-xs sm:w-[33%] md:w-[25%]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-16 text-sm">Netflix</p>
      </div>
    </div>
  );
};

export default Footer;
