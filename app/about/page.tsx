'use client'
import styles from './About.module.css';
import {useLanguageContext} from "@/app/providers/language-provider";
import {Waypoint} from "@/app/models/Waypoint";

export default function About() {
    const {i18n} = useLanguageContext();

    return (
        <main>
            <h1 id={styles['title']} className={'animate dur600 slideInBottom'}>About me</h1>
            <ul className={`animate dur800 slideInBottom ${styles["timeline"]}`}>
                {i18n.About.Timeline.map((waypoint: Waypoint, index: number) => {
                    const liClass = index % 2 === 0 ? 'text-left' : 'text-right';
                    const articleClass = index % 2 === 0 ? 'text-right' : 'text-left';
                    const durationClass = `dur${1000 + (index * 400)}`;

                    return (
                        <li key={waypoint.description} className={`animate ${durationClass} slideInBottom ${liClass}`}>
                            <article className={articleClass}>
                                <h4>{waypoint.time}</h4>
                                <div>{waypoint.description}</div>
                                <div className={'mb-10'}>{waypoint.organisation}</div>
                            </article>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}