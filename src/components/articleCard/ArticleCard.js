import React from 'react';

function ArticleCard({ title, date, content, tags }) {
    const articlePreview = content.slice(0, 400) + "...";

    return (
        <div>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{articlePreview}</p>
            <ul>
                {tags.map((tag) => (
                    <li key={tag.id}>{tag.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ArticleCard;