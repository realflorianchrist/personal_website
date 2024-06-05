'use client'
import Image from "next/image";
import ProjectPreview from "@/app/components/ProjectPreview";
import {useIntroductionRef, useMainRef, useProjectPreviewsRef} from "@/app/providers/providers";
import {useLanguageContext} from "@/app/providers/language-provider";
import {Project} from "@/app/models/Project";

export default function Home() {
    const {i18n} = useLanguageContext();

    const {mainRef} = useMainRef();
    const {introductionRef} = useIntroductionRef();
    const {projectPreviewsRef} = useProjectPreviewsRef();

    return (
        <main ref={mainRef}>
            <div id={'introduction'} ref={introductionRef}>
                <div id={'profile-picture'} className={'animate dur600 slideInBottom'}>
                    <Image
                        src={'/images/passfoto.png'}
                        alt={'profile-picture'}
                        width={100}
                        height={100}>
                    </Image>
                </div>
                <h1 className={'animate slideInBottom pb-8'}>{i18n.Home.welcome}</h1>
                <p className={'animate dur1400 slideInBottom w-1/2 text-center leading-8'}>
                    {i18n.Home.introduction}
                </p>
            </div>
            <div id={'project-previews'} ref={projectPreviewsRef}>
                <h1 className={'animate slideInBottom pb-8'}>Work</h1>
                {i18n.ProjectData.map((project: Project) => (
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