'use client'
import Image from "next/image";
import ProjectPreview from "@/app/components/project-preview";
import {ProjectData} from "@/public/data/project-data";
import {useIntroductionRef, useMainRef, useProjectPreviewsRef} from "@/app/providers/providers";

export default function Home() {
    const { mainRef } = useMainRef();
    const { introductionRef } = useIntroductionRef();
    const { projectPreviewsRef } = useProjectPreviewsRef();

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
                <h1 className={'animate slideInBottom pb-8'}>Hi, I&apos;m Florian.</h1>
                <p className={'animate dur1-4 slideInBottom w-1/2 text-center leading-8'}>
                    A passionate individual with a diverse background spanning computer sciences,
                    design and experiences as an draftsman specialising in civil engineering. I thrive
                    on exploring the intersection of technology and creativity, crafting compelling digital
                    experiences that resonate with users. With a foundation in computer sciences and civil engineering
                    I bring a unique perspective to my design process, leveraging technology to push creative
                    boundaries.
                </p>
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