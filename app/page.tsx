'use client'
import Image from "next/image";
import ProjectPreview from "@/app/components/project-preview";
import {ProjectData} from "@/public/data/project-data";
import {useIntroductionRef, useProjectPreviewsRef} from "@/app/providers/providers";

export default function Home() {
    const { introductionRef } = useIntroductionRef();
    const { projectPreviewsRef } = useProjectPreviewsRef();

    return (
        <main>
            <div id={'introduction'} ref={introductionRef}>
                <div id={'profile-picture'} className={'animate dur0-6 slideInBottom'}>
                    <Image
                        src={'/images/passfoto.png'}
                        alt={'profile-picture'}
                        width={100}
                        height={100}>
                    </Image>
                </div>
                <h1 className={'animate slideInBottom pb-8'}>Hi, I'm Florian.</h1>
                <p className={'animate animate--slow dur1-3 slideInBottom w-1/2 text-center leading-8'}>
                    A passionate individual with a diverse background spanning computer sciences,
                    design and experiences as an draftsman specialising in civil engineering. I thrive
                    on exploring the intersection of technology and creativity, crafting compelling digital
                    experiences that resonate with users. With a foundation in computer sciences and civil engineering
                    I bring a unique perspective to my design process, leveraging technology to push creative
                    boundaries.
                </p>
            </div>
            <div id={'project-previews'} ref={projectPreviewsRef}>
                {ProjectData.map((project) => (
                        <ProjectPreview
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            picture={project.picturePath}
                        />
                    )
                )}
            </div>
        </main>
    );
}
