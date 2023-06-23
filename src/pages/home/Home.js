import React from 'react';
import Countdown from "../../components/countdown/Countdown";
import articles from '../../data/articles.json'
import ArticleCard from "../../components/articleCard/ArticleCard";
import { Link } from 'react-router-dom';


function Home() {
    const sortedArticles = articles.sort((a, b) => b.id - a.id);
    const firstFiveArticles = sortedArticles.slice(0, 5);

    return (
        <>
            <h1>Welcome to the gunshow</h1>
            <p>*kisses biceps*</p>
            <p>Is this where the magic happens?</p>
            <section>
                <h1>Latest news</h1>
                {firstFiveArticles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        title={article.title}
                        date={article.date}
                        content={article.content}
                        tags={article.tags}
                        id={article.id}
                    />
                ))}
                <Link to="/articles">View All Articles</Link>
            </section>
            <section>
                <h2>Starfield</h2>
                <h3>Countdown</h3>
                <Countdown/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad debitis deserunt iste mollitia odit quia soluta voluptatibus. Animi perspiciatis, voluptatum?</p>
            </section>
        </>
    );
}

export default Home;