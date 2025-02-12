import { useLanguageContext } from "@/app/providers/language-provider";
import { useEffect, useState } from "react";

const produceSpans = (text: any, animation: any) => {
  return text.split("").map((letter: any, index: any) => (
    <span
      key={`${text}-${index}-${Math.random()}`}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

export default function Position() {
  const { i18n } = useLanguageContext();
  const [animatedText, setAnimatedText] = useState<[JSX.Element[], JSX.Element[]]>([[], []]);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    if (i18n?.Hero?.positions) {
      setShowSecondText(false)
      setAnimatedText([
        produceSpans(i18n.Hero.positions[0], "animate-textRotate1"),
        produceSpans(i18n.Hero.positions[1], "animate-textRotate2"),
      ]);

      setTimeout(() => {
        setShowSecondText(true);
      }, i18n.Hero.positions[0].length * 50);
    }
  }, [i18n?.Hero?.positions]);

  if (!i18n) return null;

  return (
    <div
      className="relative cursor-default font-medium text-white text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center">
      <div className="absolute inset-0 top-[-30px] sm:top-[-10px] lg:top-0 flex flex-col">
        <div className="text first absolute left-1 md:left-2 2xl:left-4 flex" aria-label="Software Developer">
          {animatedText[0]}
        </div>
        <div className="text second absolute left-1 md:left-2 2xl:left-4 flex" aria-label="Draftsman"
             style={{ opacity: showSecondText ? 1 : 0 }}
        >
          {animatedText[1]}
        </div>
      </div>
    </div>
  );
}