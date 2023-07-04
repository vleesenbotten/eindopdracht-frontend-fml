import React from 'react';
import styles from "./ProfileImage.module.css"

function ProfileImage() {
    return (
        <div>
            <div className={styles["profile-image_smiley-face"]}>
                <div className={styles["profile-image_face"]}>
                    <div className={styles["profile-image_eyes"]}>
                        <div className={styles["profile-image_eye"]}></div>
                        <div className={styles["profile-image_eye"]}></div>
                    </div>
                    <div className={styles["profile-image_mouth"]}></div>
                </div>
            </div>
        </div>
    );
}

export default ProfileImage;