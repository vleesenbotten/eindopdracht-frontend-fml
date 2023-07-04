import React from 'react';
import articles from '../../data/articles.json';
import ArticleCard from "../../components/articleCard/ArticleCard";
import styles from './Articles.module.css'

function Articles() {
    const sortedArticles = articles.sort((a, b) => b.id - a.id);

    return (
        <section className={styles["article-overview_container"]}>
            <section className={styles["article_section-news"]}>
                <h1>all news articles</h1>
                <article className={styles["article_section-one"]}>
                    {sortedArticles.map((article) => (
                        <ArticleCard
                            key={article.id}
                            title={article.title}
                            date={article.date}
                            content={article.content}ß
                            tags={article.tags}
                            image={article.image}
                            id={article.id}
                        />
                    ))}
                </article>
            </section>
        </section>
    );
}

export default Articles;
