import { useI18n } from "@/hooks/useI18n";

export default function Education() {
    const i18n = useI18n("AboutMe.Education");

    return (
        <div className="flex flex-col gap-4">
            {i18n.Items.map((item) => (
                <div
                    key={item.Id}
                    className="rounded-2xl border-0.5 border-border bg-primary p-4"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-lg">
                                {item.Title}
                            </h2>

                            <p className="text-sm text-white/70">
                                {item.Institution}
                            </p>
                        </div>

                        <span className="shrink-0 rounded-full border-0.5 border-border bg-popover px-3 py-1 text-xs text-white/70">
                            {item.Period}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}