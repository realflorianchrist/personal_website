import { useI18n } from '@/hooks/useI18n';
import { AboutMeSectionId } from '@/i18n/I18nType';
import useFinderStore from '@/stores/finderStore';
import cn from "@/utils/cn";
import { useEffect } from 'react';
import { IconType } from 'react-icons';
import {
    HiAcademicCap,
    HiBriefcase,
    HiCodeBracket,
    HiCpuChip,
    HiUser,
} from "react-icons/hi2";


export default function Sidebar() {

    const i18n = useI18n('AboutMe');
    const { activeSection, setActiveSection } = useFinderStore();

    const sections: { id: AboutMeSectionId; title: string; icon: IconType; }[] = [
        {
            id: i18n.About.Id,
            title: i18n.About.Title,
            icon: HiUser,
        },
        {
            id: i18n.Skills.Id,
            title: i18n.Skills.Title,
            icon: HiCodeBracket,
        },
        {
            id: i18n.Experience.Id,
            title: i18n.Experience.Title,
            icon: HiBriefcase,
        },
        {
            id: i18n.Education.Id,
            title: i18n.Education.Title,
            icon: HiAcademicCap,
        },
        {
            id: i18n.TechStack.Id,
            title: i18n.TechStack.Title,
            icon: HiCpuChip,
        },
    ];

    useEffect(() => {
        console.log(activeSection);
    }, [activeSection]);

    return (
        <div className="text-sm">
            <nav className="flex flex-col gap-1">
                {sections.map((section) => {

                    const Icon = section.icon;

                    return (
                        <button
                            key={section.id}
                            type="button"
                            onClick={() => {
                                setActiveSection(section.id);
                            }}
                            className={cn(
                                "flex items-center gap-2 text-left px-3 py-1.5 rounded-lg transition-colors",
                                activeSection === section.id
                                    ? "bg-primary text-accent"
                                    : "hover:bg-muted"
                            )}
                        >
                            <Icon size={16} />
                            <span>{section.title}</span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}