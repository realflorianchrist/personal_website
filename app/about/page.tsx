import styles from './About.module.css';

export default function About() {
    return (
        <main>
            <h1 id={styles['title']}>About me</h1>
            <ul className={styles["timeline"]}>
                <li className={"text-left"}>
                    <article className={"text-right"}>
                        <h4>Sept. 2022 - heute</h4>
                        <p>BSc Informatik<br/>Fachhochschule Nordwestschweiz</p>
                    </article>
                </li>
                <li className={"text-right"}>
                    <article className={"text-left"}>
                        <h4>Aug. 2019 - heute</h4>
                        <p>Zeichner Fachrichtung Ingenieurbau<br/>Aegerter & Bosshardt AG</p>
                    </article>
                </li>
                <li className={"text-left"}>
                    <article className={"text-right"}>
                        <h4>Aug. 2019 - Jul. 2021</h4>
                        <p>Berufsmaturität<br/>Technik, Architektur, Life Sciences</p>
                    </article>
                </li>
                <li className={"text-right"}>
                    <article className={"text-left"}>
                        <h4>Aug. 2015 - Jul. 2019</h4>
                        <p>Ausbildung zum Zeichner Fahrichtung Ingenieurbau<br/>Aegerter & Bosshardt AG</p>
                    </article>
                </li>
            </ul>
        </main>
    );
}