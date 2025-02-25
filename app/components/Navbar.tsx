import { useEffect, useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { useLanguageContext } from "@/app/providers/language-provider";

export default function Navbar() {
  const { i18n } = useLanguageContext();

  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className="right-2 flex items-center sm:bg-none p-8 sm:px-16 sm:py-10 fixed z-40 pointer-events-none"
    >
      <div className="flex justify-between items-start mx-auto">

        <ul className="list-none hidden sm:flex flex-col gap-5">
          {Object.entries(i18n?.Sections ?? {}).map(([key, value]) => (
            <li
              key={key}
              className={`relative flex items-center ${
                active === key ? "text-white" : "text-slate-500"
              } hover:text-white text-[18px] lg:text-[24px] font-bold pointer-events-auto cursor-pointer`}
              onClick={() => setActive(key)}
            >
              {active === key && (
                <div className="fixed right-10 w-2 h-6 lg:h-8 bg-quaternary"></div>
              )}
              <a href={`#${key}`}>{value}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[35px] h-[35px] object-contain pointer-events-auto cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <IoCloseSharp className={"flex h-full w-full"} />
            ) : (
              <IoMenu className={"flex h-full w-full"} />
            )}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-50 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {Object.entries(i18n?.Sections ?? {}).map(([key, value]) => (
                <li
                  key={key}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === key ? "text-quaternary" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(key);
                  }}
                >
                  <a href={`#${key}`}>{value}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}