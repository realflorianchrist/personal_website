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
      setShowSecondText(false);
      setAnimatedText([
        produceSpans(i18n.Hero.positions[0], "animate-textRotate1"),
        produceSpans(i18n.Hero.positions[1], "animate-textRotate2")
      ]);

      setTimeout(() => {
        setShowSecondText(true);
      }, i18n.Hero.positions[0].length * 50);
    }
  }, [i18n?.Hero?.positions]);

  if (!i18n) return null;

  return (
    <div className="text-left leading-[5px] md:text-2xl md:leading-[10px]">
      <div>
        {animatedText[0]}
      </div>
      <div style={{ opacity: showSecondText ? 1 : 0 }}>
        {animatedText[1]}
      </div>
    </div>
  );
}