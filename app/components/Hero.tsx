import Position from "@/app/components/Position";
import { RefObject } from "react";
import SpacemanCanvas from "@/app/components/SpacemanCanvas";
import { useLanguageContext } from "@/app/providers/language-provider";

export default function Hero({ scrollContainer }: { scrollContainer: RefObject<HTMLElement> }) {
  const { i18n } = useLanguageContext();

  return (
    <section className="parallax">
      <div className="parallax__content z-10 h-full w-full absolute top-20">
        <div className="absolute left-5 md:left-10 md:top-40">
          <h1 className="text-white text-3xl mb-2 md:text-7xl">
            FLORIAN CHRIST
          </h1>
          <Position />
        </div>
        <div className="absolute left-5 pt-24 w-[90%] md:top-40 md:left-auto md:right-10 md:text-4xl md:w-[25%]">
          <div className="font-bold streaky-glow text-left">
            {i18n?.Hero.introduction}
          </div>
        </div>
      </div>

      <img className="parallax__stars" src="/images/parallax/1Stars.svg" alt="" />
      <img className="parallax__planets" src="/images/parallax/2Planets.svg" alt="" />
      <img className="parallax__mountain1" src="/images/parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="/images/parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater" src="/images/parallax/5Crater.svg" alt="" />
      <img className="parallax__sun" src="/images/parallax/6Sun.svg" alt="" />

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
}