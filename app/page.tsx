'use client'
import Image from "next/image";
import ProjectPreview from "@/app/components/ProjectPreview";
import {ProjectData} from "@/public/data/project-data";
import {useIntroductionRef, useMainRef, useProjectPreviewsRef} from "@/app/providers/useRef-providers";
import {useLanguageContext} from "@/app/providers/language-provider";

export default function Home() {
    const {i18n, changeLanguage} = useLanguageContext();

    const {mainRef} = useMainRef();
    const {introductionRef} = useIntroductionRef();
    const {projectPreviewsRef} = useProjectPreviewsRef();

    return (
        <main ref={mainRef}>
            <div id={'introduction'} ref={introductionRef}>
                <div id={'profile-picture'} className={'animate dur0-6 slideInBottom'}>
                    <Image
                        src={'/images/passfoto.png'}
                        alt={'profile-picture'}
                        width={100}
                        height={100}>
                    </Image>
                </div>
                <h1 className={'animate slideInBottom pb-8'}>{i18n.Home.welcome}</h1>
                <p className={'animate dur1-4 slideInBottom w-1/2 text-center leading-8'}>
                    {i18n.Home.introduction}
                </p>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('de')}>Deutsch</button>
            </div>
            <div id={'project-previews'} ref={projectPreviewsRef}>
                <h1 className={'animate slideInBottom pb-8'}>Work</h1>
                {ProjectData.map((project) => (
                        <ProjectPreview
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            picture={project.picturePath}
                            technologies={project.technologies}
                        />
                    )
                )}
            </div>
        </main>
    );
}