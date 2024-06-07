'use client'
import styles from './ProjectPreview.module.css'
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Technology} from "@/app/models/Technology";
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
            <div id={styles['project-preview']}
                 onClick={() => router.push(`work/${project.id}`)}
            >
                <div id={styles['project-infos']} className={'self-center'}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <ul id={styles['technologies']}>
                        {project.technologies.map(tech => (
                            <li key={tech.name}>
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
                <div id={styles['picture']} className={'self-center'}>
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