import React from 'react';
import articles from '../../data/articles.json';
import ArticleCard from "../../components/articleCard/ArticleCard";

function Articles() {
    const sortedArticles = articles.sort((a, b) => b.id - a.id);

    return (
        <>
            <h1>all news articles</h1>
            {sortedArticles.map((article) => (
                <ArticleCard
                    key={article.id}
                    title={article.title}
                    date={article.date}
                    content={article.content}
                    tags={article.tags}
                    id={article.id}
                />
            ))}
        </>
    );
}

export default Articles;
