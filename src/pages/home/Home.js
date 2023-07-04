import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from "../../components/countdown/Countdown";
import ArticleCard from "../../components/articleCard/ArticleCard";
import TopFive from "../../components/topfive/TopFive";
import SortedArticles from "../../helpers/sortedArticles";
import Button from "../../components/button/Button";
import styles from "./Home.module.css";
import articles from '../../data/articles.json';

function Home() {
    const firstFiveArticles = SortedArticles(articles);

    return (
        <section className={styles["home_container"]}>
            <section className={styles["home_section-news"]}>
                <h1>Latest news</h1>
                <article className={styles["home_section-one"]}>
                {firstFiveArticles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        title={article.title}
                        date={article.date}
                        content={article.content}
                        tags={article.tags}
                        image={article.image}
                        icon={article.icon}
                        id={article.id}
                    />
                ))}
                <Link to="/articles">view all articles</Link>
                </article>
            </section>

            <section className={styles["home_section-two"]}>
                <article className={styles["home_anticipation-station"]}>
                    <h2 className={styles["home_heading-color"]}>Anticipation Station</h2>
                    <span className={styles["text-constrictor"]}>
                        <h3>Starfield Countdown</h3>
                        <Countdown/>
                        <p>Are you as excited as we are about Starfield? But do you tire from anxiously googling 'how many days more until Starfield release' every single day? Fret no more! With this handy dandy countdown we bring the anxiety to you! </p>
                    </span>
                </article>
                <article className={styles["home_top-five"]}>
                    <TopFive/>
                </article>
                <article className={styles["home_newsletter"]}>
                    <h3 className={styles["home_heading-color"]}>Never miss any news</h3>
                    <span className={styles["text-constrictor"]}>
                    <p>Sign up for our newsletter, it's free!</p>
                    <input type="text" placeholder="supercool@email.com"/>
                    <Button type="submit"
                            name="boom!"/>
                    </span>
                </article>
            </section>
        </section>
    );
}

export default Home;