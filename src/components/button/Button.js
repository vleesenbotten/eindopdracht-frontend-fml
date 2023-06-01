import React from 'react';
import styles from "./Button.module.css"

function Button({type, clickHandler, name}) {
    return (
        <button type={type}
                onClick={clickHandler}
                className={styles["button"]}>
            <span>{name}</span>
        </button>
    );
}

export default Button;