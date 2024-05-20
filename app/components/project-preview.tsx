import styles from './ProjectPreview.module.css'
import Image from "next/image";

export default function ProjectPreview(
    {
        title,
        description,
        picture
    }: {
        title: string,
        description: string,
        picture: string
    }) {

    return (
        <div id={styles['project-preview']}>
            <div id={styles['project-infos']} className={'self-center'}>
                <h2>{title}</h2>
                <p>{description}</p>
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