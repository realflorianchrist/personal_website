"use client";
import React, {createContext, useContext, useRef} from 'react';
import {ThemeProvider} from 'next-themes';

const MainRefContext = createContext<{
    mainRef: React.RefObject<HTMLDivElement> | null;
} | undefined>(undefined);

export const useMainRef = () => {
    const context = useContext(MainRefContext);
    if (!context) {
        throw new Error("useMainRef has to be used inside a RefProvider");
    }
    return context;
};

const IntroductionRefContext = createContext<{
    introductionRef: React.RefObject<HTMLDivElement> | null;
} | undefined>(undefined);

export const useIntroductionRef = () => {
    const context = useContext(IntroductionRefContext);
    if (!context) {
        throw new Error("useIntroductionRef has to be used inside a RefProvider");
    }
    return context;
};

const ProjectPreviewsRefContext = createContext<{
    projectPreviewsRef: React.RefObject<HTMLDivElement> | null;
} | undefined>(undefined);

export const useProjectPreviewsRef = () => {
    const context = useContext(ProjectPreviewsRefContext);
    if (!context) {
        throw new Error("useProjectPreviewsRef has to be used inside a RefProvider");
    }
    return context;
};

export const UseRefProviders = ({children}: { children: React.ReactNode }) => {
    const mainRef = useRef<HTMLDivElement>(null);
    const introductionRef = useRef<HTMLDivElement>(null);
    const projectPreviewsRef = useRef<HTMLDivElement>(null);

    return (
        <ThemeProvider attribute={'class'} defaultTheme={'system'} enableSystem>
            <MainRefContext.Provider value={{mainRef}}>
                <IntroductionRefContext.Provider value={{introductionRef}}>
                    <ProjectPreviewsRefContext.Provider value={{projectPreviewsRef}}>
                        {children}
                    </ProjectPreviewsRefContext.Provider>
                </IntroductionRefContext.Provider>
            </MainRefContext.Provider>
        </ThemeProvider>
    );
};
