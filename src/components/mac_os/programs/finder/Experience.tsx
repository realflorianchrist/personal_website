import { useI18n } from "@/hooks/useI18n";

export default function Experience() {
    const i18n = useI18n("AboutMe.Experience");

    return (
        <div className="flex flex-col shrink-0 gap-4 h-fit">
            {i18n.Items.map((item) => (
                <div
                    key={item.Id}
                    className="relative rounded-2xl border-0.5 border-border bg-primary p-4"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-lg">{item.Title}</h2>

                            {item.Company && (
                                <p className="text-sm text-white/70">
                                    {item.Company}
                                </p>
                            )}
                        </div>

                        <span className="shrink-0 rounded-full border-0.5 border-border bg-popover px-3 py-1 text-xs text-white/70">
                            {item.Period}
                        </span>
                    </div>

                    {item.Points && (
                        <ul className="mt-3 flex flex-col gap-2">
                            {item.Points.map((point) => (
                                <li
                                    key={point}
                                    className="flex items-center gap-2 text-sm text-white/70"
                                >
                                    <div className="size-1 rounded-full bg-white/50 shrink-0" />

                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}