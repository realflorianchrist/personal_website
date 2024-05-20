"use client";
import React, {createContext, useContext, useRef} from 'react';

const MainRefContext = createContext<{
    mainRef: React.RefObject<HTMLDivElement> | null;
} | undefined>(undefined);

export const useMainRef = () => {
    const context = useContext(MainRefContext);
    if (!context) {
        throw new Error("useMainRef muss innerhalb eines RefProvider verwendet werden");
    }
    return context;
};

const IntroductionRefContext = createContext<{
    introductionRef: React.RefObject<HTMLDivElement> | null;
} | undefined>(undefined);

export const useIntroductionRef = () => {
    const context = useContext(IntroductionRefContext);
    if (!context) {
        throw new Error("useIntroductionRef muss innerhalb eines ProjectPreviewsRefProvider verwendet werden");
    }
    return context;
};

const ProjectPreviewsRefContext = createContext<{
    projectPreviewsRef: React.RefObject<HTMLDivElement> | null;
} | undefined>(undefined);

export const useProjectPreviewsRef = () => {
    const context = useContext(ProjectPreviewsRefContext);
    if (!context) {
        throw new Error("useProjectPreviewsRef muss innerhalb eines ProjectPreviewsRefProvider verwendet werden");
    }
    return context;
};


export const RefProvider = ({ children }: { children: React.ReactNode }) => {
    const mainRef = useRef<HTMLDivElement>(null);
    const introductionRef = useRef<HTMLDivElement>(null);
    const projectPreviewsRef = useRef<HTMLDivElement>(null);

    return (
        <MainRefContext.Provider value={{ mainRef }}>
            <IntroductionRefContext.Provider value={{ introductionRef }}>
                <ProjectPreviewsRefContext.Provider value={{ projectPreviewsRef }}>
                    {children}
                </ProjectPreviewsRefContext.Provider>
            </IntroductionRefContext.Provider>
        </MainRefContext.Provider>
    );
};
