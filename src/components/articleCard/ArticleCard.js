import React from 'react';
import {Link} from "react-router-dom";

function ArticleCard({ title, date, content, tags, id }) {
    const articlePreview = content.slice(0, 400) + "...";

    return (
        <div>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{articlePreview}</p>
            <ul>
                {tags.map((tag) => (
                    <li key={tag.id}>{tag.name}</li>
                ))}
            </ul>
            <Link to={`/articles/${id}`}>read more</Link>
        </div>
    );
}

export default ArticleCard;