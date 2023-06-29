import React from 'react';
import styles from "./Error.module.css"

function Error({ message }) {
    return (
        <div className={styles["error_div"]}>
            <p>{message}</p>
        </div>
    );
}

export default Error;
