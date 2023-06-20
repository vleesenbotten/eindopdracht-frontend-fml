import React from 'react';
import articles from '../../data/articles.json';
import ArticleCard from "../../components/articleCard/ArticleCard";

function Articles() {
    return (
        <>
            <h1>All Articles</h1>
            {articles.map((article) => (
                <ArticleCard
                    key={article.id}
                    title={article.title}
                    date={article.date}
                    content={article.content}
                    tags={article.tags}
                />
            ))}
        </>
    );
}

export default Articles;
