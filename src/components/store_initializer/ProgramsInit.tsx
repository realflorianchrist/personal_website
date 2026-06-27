'use client';
import { useI18n } from '@/hooks/useI18n';
import useLanguageStore from '@/stores/languageStore';
import useProgramsStore from '@/stores/programsStore';
import { Program, ProgramId } from '@/types/program';
import { useEffect } from 'react';

export default function ProgramsInit() {

    const { setPrograms } = useProgramsStore();
    const i18n = useI18n('Programs');
    const { selectedLanguage } = useLanguageStore();

    const initialPrograms: Record<ProgramId, Program> = {
        0: {
            id: 0,
            name: i18n.AboutMe,
            windowDimensions: { width: 900, height: 600 },
            windowPosition: { x: 150, y: 50 },
            isResizable: true
        },
        1: {
            id: 1,
            name: i18n.Contact,
            windowDimensions: { width: 800, height: 500 },
            windowPosition: { x: 400, y: 100 },
            isResizable: true
        },
        2: {
            id: 2,
            name: i18n.Projects,
            windowDimensions: { width: 1200, height: 700 },
            windowPosition: { x: 100, y: 25 },
            isResizable: true
        }
    };

    useEffect(() => setPrograms(initialPrograms), []);

    useEffect(() => {
        setPrograms(programs => ({
            0: { ...programs[0], name: i18n.AboutMe },
            1: { ...programs[1], name: i18n.Contact },
            2: { ...programs[2], name: i18n.Projects },
        }));
    }, [selectedLanguage]);

    return null;
}