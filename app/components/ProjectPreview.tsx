'use client'
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Tilt} from 'react-tilt';
import {Project} from "@/app/models/Project";

export default function ProjectPreview({project}: Readonly<{ project: Project }>) {

    const router = useRouter();

    const tiltOptions = {
        reverse: true,
        max: 10,
        perspective: 1000,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: "1.01",
        speed: "1000",
        transition: true,
        axis: null,
        reset: true
    };

    return (
        <Tilt options={tiltOptions}>
            <div className={'bg-foreground-color flex items-center p-[15px] border-accent-color border-[0.5px] rounded-[15px] mb-[50px]'}
                 onClick={() => router.push(`work/${project.id}`)}
            >
                <div className={'w-[40%]'}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <ul className={'flex bg-scrollbar-color rounded-[10px] content-center mt-[15px]'}>
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
                <div>
                    <Image
                        src={project.picturePath}
                        alt={'project-picture'}
                        width={1500}
                        height={400}>
                    </Image>
                </div>
            </div>
        </Tilt>
    );
}