import React from 'react';
import articles from "../../data/articles.json";
import {useParams} from "react-router-dom";

function ArticlePost() {
    const { id } = useParams();

    const currentArticle = articles.find((article) => {
        return article.id === id;
    })
    return (
        <div>
            <h1>{currentArticle.title}</h1>
            <h2>{currentArticle.date}</h2>
            <p>{currentArticle.content}</p>
            <ul>
                {currentArticle.tags.map((tag) => (
                    <li key={tag.id}>{tag.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ArticlePost;