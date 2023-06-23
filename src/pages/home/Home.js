import React from 'react';
import Countdown from "../../components/countdown/Countdown";
import articles from '../../data/articles.json'
import ArticleCard from "../../components/articleCard/ArticleCard";
import { Link } from 'react-router-dom';
import SortedArticles from "../../helpers/sortedArticles";
import styles from "./Home.module.css"

function Home() {
    const firstFiveArticles = SortedArticles(articles);

    return (
        <section className={styles["home_container"]}>
            {/*<h1>Welcome to the gunshow</h1>*/}
            {/*<p>*kisses biceps*</p>*/}
            {/*<p>Is this where the magic happens?</p>*/}
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
                        id={article.id}
                    />
                ))}
                <Link to="/articles">View All Articles</Link>
                </article>
            </section>

            <section className={styles["home_section-two"]}>
                <h2>Starfield</h2>
                <h3>Countdown</h3>
                <Countdown/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad debitis deserunt iste mollitia odit quia soluta voluptatibus. Animi perspiciatis, voluptatum?</p>
            </section>
        </section>
    );
}

export default Home;