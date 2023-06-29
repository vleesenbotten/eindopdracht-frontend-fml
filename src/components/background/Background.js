import React from 'react';
import styles from "./Background.module.css";

function Background() {
    return (
        <>
            <div className={styles["background_synthwave-mountain-one"]}></div>
            <div className={styles["background_synthwave-mountain-two"]}></div>
            <div className={styles["background_synthwave-grid"]}></div>
            <div className={styles["background_synthwave-sun"]}></div>
            <div className={styles["background_synthwave-mountain-three"]}></div>
            <div className={styles["background_synthwave-mountain-four"]}></div>
            <div className={styles["background_synthwave-mountain-five"]}></div>
            <div className={styles["background_synthwave-mountain-six"]}></div>
        </>
    );
}

export default Background;