'use client'
import Image from "next/image";
import {useRouter} from "next/navigation";
import {ProjectPreviewType} from "@/app/models/ProjectPreviewType";

export default function ProjectPreview({project}: Readonly<{ project: ProjectPreviewType }>) {

    const router = useRouter();

    return (
        <div
            className={'bg-foreground-color flex flex-col w-full cursor-pointer'}
            onClick={() => router.push(`work/${project.id}`)}
        >
            <div className={'flex mb-5 w-full aspect-[16/9] items-center justify-center relative overflow-hidden rounded-lg'}>
                <Image
                    src={'/images/Placeholder.png'}
                    alt={'project-picture'}
                    layout={'fill'}
                    objectFit={'cover'}
                />
            </div>
            <div>
                <h2>{project.title}</h2>
                <p className={'h-20'}>{project.description}</p>
                <ul className={'flex bg-scrollbar-color rounded-lg justify-items-center content-center mt-[15px]'}>
                    {project.technologies.map(tech => (
                        <li key={tech.name} className={'p-1'}>
                            <Image
                                src={tech.path}
                                alt={'technologies'}
                                width={30}
                                height={30}>
                            </Image>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}