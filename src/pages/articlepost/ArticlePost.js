import React from 'react';
import articles from "../../data/articles.json";
import {Link, useParams} from "react-router-dom";
import styles from "./ArticlePost.module.css"

function ArticlePost() {
    const { id } = useParams();

    const currentArticle = articles.find((article) => {
        return article.id === id;
    })
    return (
        <section className={styles["article-post_container"]}>
            <article className={styles["article-post_article"]}>
                <span className={styles["article-post_image-wrapper"]}>
                <img src={`${currentArticle.image}`} alt="alt tag" className={styles["article-post_image"]}/>
                </span>
                <h1 className={styles["article-post_heading-one"]}>{currentArticle.title}</h1>
                <section className={styles["article-post_section"]}>
                    <h2 className={styles["article-post_head-two"]}>{currentArticle.date}</h2>
                    <p>{currentArticle.content}</p>
                    <Link to={'/'} className={styles["article-post-head-link"]}>back to home</Link>
                    <ul className={styles["article-post_ul"]}>
                        {currentArticle.tags.map((tag) => (
                            <li key={tag.id} className={styles["article-post_tag"]}>
                        <span className={styles["article-post_tags"]}>
                        <img src={`${tag.icon}`} alt={tag.name} width={30}/>
                            {tag.name}
                        </span>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>
        </section>
    );
}

export default ArticlePost;