'use client';
import { useI18n } from '@/hooks/useI18n';
import useLanguageStore from '@/stores/languageStore';
import useProgramsStore from '@/stores/programsStore';
import { useEffect } from 'react';

export default function ProgramsInit() {

    const { setPrograms } = useProgramsStore();
    const i18n = useI18n('Programs');
    const { selectedLanguage } = useLanguageStore();

    useEffect(() => {
        setPrograms(prev => ({
            finder: {
                id: "finder",
                name: i18n.finder,
                windowDimensions: prev.finder?.windowDimensions ?? { width: 900, height: 600 },
                windowPosition: prev.finder?.windowPosition ?? { x: 150, y: 50 },
                isResizable: true,
                isMinimized: prev.finder?.isMinimized ?? false,
            },
            contact: {
                id: "contact",
                name: i18n.contact,
                windowDimensions: prev.contact?.windowDimensions ?? { width: 800, height: 500 },
                windowPosition: prev.contact?.windowPosition ?? { x: 400, y: 100 },
                isResizable: true,
                isMinimized: prev.contact?.isMinimized ?? false,
            },
            safari: {
                id: "safari",
                name: i18n.safari,
                windowDimensions: prev.safari?.windowDimensions ?? { width: 1200, height: 700 },
                windowPosition: prev.safari?.windowPosition ?? { x: 100, y: 25 },
                isResizable: true,
                isMinimized: prev.safari?.isMinimized ?? false,
            },
        }));
    }, [selectedLanguage, setPrograms]);

    return null;
};