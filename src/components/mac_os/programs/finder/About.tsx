import { useI18n } from "@/hooks/useI18n";

export default function About() {
    const i18n = useI18n("AboutMe.About");

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
                {i18n.Tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-primary border-0.5 border-border text-sm text-white/70"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <p className="text-lg leading-relaxed">
                {i18n.Intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {i18n.Cards.map((card) => (
                    <div
                        key={card.Id}
                        className="rounded-2xl border-0.5 border-border bg-primary p-2"
                    >
                        <h2 className="text-lg mb-2">
                            {card.Title}
                        </h2>

                        <p className="text-sm leading-relaxed text-white/70">
                            {card.Description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}