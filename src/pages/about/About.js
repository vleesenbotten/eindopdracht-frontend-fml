import React from 'react';
import Background from '../../components/background/Background';
import styles from './About.module.css';
import Logo from "../../components/logo/Logo";

function About() {


    return (
        <section className={styles["about_outer-container"]}>
            <Background/>
            <article className={styles["about_inner-container"]}>
                <h1>about PixelPress</h1>
                <h2>👾</h2>
                <p>
                    Welcome to PixelPress, your ultimate source for all things RPG! Founded in 2023 by the visionary editor and creator, Tessa Helle, our mission is to provide you with the most informed RPG news about video games, Dungeons & Dragons, and anything else related to the exciting world of role-playing games. At PixelPress, we eat, sleep, and breathe RPGs, and we're here to ensure you stay up to date with the latest and greatest in this ever-evolving realm.
                </p>
                <h3>Meet the minds behind pixelPress:</h3>
                <p>Tessa Helle - editor and creator</p>
                <p>
                    As the mastermind behind PixelPress, Tessa Helle brings their passion for RPGs to life. With a deep love for immersive storytelling, captivating gameplay mechanics, and vibrant worlds, Tessa's vision drives the direction and content of our magazine. Their dedication to delivering insightful and engaging articles ensures that you, our esteemed readers, receive nothing short of exceptional RPG coverage.
                </p>
                <p>Garth - trusty sidekick and game critic</p>
                <p>
                    Every editor needs a trusty sidekick, and Garth fits the bill perfectly. With an uncanny knack for spotting the hidden gems within the RPG landscape, Garth's role as our game critic is vital. He fearlessly explores vast virtual realms, unearths undiscovered treasures, and provides honest, unbiased reviews that you can trust. Whether it's delving into the darkest dungeons or conquering epic quests, Garth's discerning eye and sharp wit make him an invaluable asset to the PixelPress team.
                </p>
                <p>Wayne - webmaster extraordinaire</p>
                <p>
                    Behind the scenes, we have Wayne, our tech-savvy genius responsible for crafting the digital space that is PixelPress. With his unparalleled coding skills and tireless dedication, Wayne created our dynamic website and ensures it remains up to date and seamlessly functional. He meticulously keeps our digital home polished, allowing you to navigate through our articles, reviews, and features with ease. Wayne is the unsung hero who ensures that PixelPress remains a cutting-edge hub for all your RPG needs.
                </p>
            </article>
        </section>
    );
}

export default About;
