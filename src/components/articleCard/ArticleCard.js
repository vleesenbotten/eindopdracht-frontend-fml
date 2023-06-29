import React from 'react';
import {Link} from "react-router-dom";
import styles from "../articleCard/ArticleCard.module.css";

function ArticleCard({title, date, content, tags, id, image, icon}) {
    const articlePreview = content.slice(0, 400) + "...";

    return (<article className={styles["article_outer-container"]}>
            <div className={styles["article_inner-container"]}>
                <span className={styles["article_image-wrapper"]}>
              <img src={`${image}`} alt="alt tag" className={styles["article_image"]}/>
            </span>
                <h2 className={styles["article_h2"]}>{title}</h2>
                <span className={styles["article_text-constrictor"]}>
                    <h3>{date}</h3>
                <p>{articlePreview}</p>
            <Link to={`/articles/${id}`} className={styles["article_text-link"]}>read more</Link>
            <ul className={styles["article_ul"]}>
                {tags.map((tag) => (<li key={tag.id} className={styles["article_tag"]}>
                        <span className={styles["articles_tags"]}>
                        <img src={`${tag.icon}`} alt={tag.name} width={30}/>
                            {tag.name}
                        </span>
                    </li>))}
            </ul>
            </span>
            </div>
        </article>);
}

export default ArticleCard;
