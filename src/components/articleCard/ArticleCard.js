import React from 'react';
import {Link} from "react-router-dom";
import styles from "../articleCard/ArticleCard.module.css";

function ArticleCard({title, date, content, tags, id, image, icon}) {
    const articlePreview = content.slice(0, 400) + "...";

    return (
        <div className={styles["article_outer-container"]}>
            <span className={styles["article_image-wrapper"]}>
              <img src={`${image}`} alt="alt tag" className={styles["article_image"]}/>
            </span>
            <span className={styles["article_text-constrictor"]}>
                <h2>{title}</h2>
                <h3>{date}</h3>
                <p>{articlePreview}</p>
            <Link to={`/articles/${id}`}>read more</Link>
            <ul className={styles["article_ul"]}>
                {tags.map((tag) => (
                    <li key={tag.id} className={styles["article_tag"]}>
                        <img src={`${tag.icon}`} alt={tag.name} width={40}/>
                        {tag.name}
                    </li>
                ))}
            </ul>
            </span>
        </div>
    );
}

export default ArticleCard;