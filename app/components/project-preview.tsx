'use client'
import styles from './ProjectPreview.module.css'
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Technologies} from "@/app/models/technologies";

export default function ProjectPreview(
    {
        id,
        title,
        description,
        picture,
        technologies
    }: {
        id: number
        title: string
        description: string
        picture: string
        technologies: Technologies[]
    }) {

    const router = useRouter();

    return (
        <div id={styles['project-preview']}
             onClick={() => router.push(`work/${id}`)}
        >
            <div id={styles['project-infos']} className={'self-center'}>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul id={styles['technologies']}>
                    {technologies.map(tech => (
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
                    src={picture}
                    alt={'project-picture'}
                    width={1500}
                    height={0}>
                </Image>
            </div>
        </div>
    );
}