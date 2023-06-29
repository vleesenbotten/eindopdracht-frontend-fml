import React from 'react';
import styles from "./Logo.module.css";

function Logo() {
    return (
        <div className={styles["logo-image_outer-container"]}>
            <div className={styles["logo-image_smiley-face"]}>
                <div className={styles["logo-image_face"]}>
                    <div className={styles["logo-image_eyes"]}>
                        <div className={styles["logo-image_eye"]}></div>
                        <div className={styles["logo-image_eye"]}></div>
                    </div>
                    <div className={styles["logo-image_mouth"]}></div>
                </div>
                    <div className={styles["logo-image_body"]}>
                        <div className={styles["logo-image_touchpad"]}></div>
                        <div className={styles["logo-image_body-round"]}></div>
                        <span className={styles["logo-image_body-round_test"]}>
                            <div className={styles["logo-image_body-round"]}></div>
                            <div className={styles["logo-image_body-round"]}></div>
                        </span>
                        <div className={styles["logo-image_body-round"]}></div>
                    </div>
            </div>
            <div className={styles["logo-letters_container"]}>
                <div className={styles["logo-letters_neon"]}>Pixel</div>
                <div className={styles["logo-letters_synth"]}>Press</div>
            </div>
        </div>
    );
}

export default Logo;