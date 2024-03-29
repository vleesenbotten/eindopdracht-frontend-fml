import React, { useEffect, useState} from 'react';
import styles from "./Countdown.module.css";

function Countdown() {
    const targetDate = new Date('2023-09-06');
    const [remainingTime, setRemainingTime] = useState(calculateTime());

    function calculateTime() {
        const currentTime = new Date();
        const difference = targetDate - currentTime;

        if(difference < 0 ) {
            return { days: 0, hours: 0, minutes: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 *24));
        const hours = Math.floor((difference % (1000*60*60*24)) / (1000*60*60));
        const minutes = Math.floor((difference % (1000*60*60)) / (1000*60));

        return { days, hours, minutes };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime((calculateTime));
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <article className={styles["countdown_outer-container"]}>
            <div className={styles["countdown_inner-container"]}>
                <div className={styles["countdown_container-time"]}>{remainingTime.days}</div>
                <p className={styles["countdown_container-text"]}>days</p>
            </div>
            <div className={styles["countdown_inner-container"]}>
                <div className={styles["countdown_container-time"]}>{remainingTime.hours}</div>
                <p className={styles["countdown_container-text"]}>hours</p>
            </div>
            <div className={styles["countdown_inner-container"]}>
                <div className={styles["countdown_container-time"]}>{remainingTime.minutes}</div>
                <p className={styles["countdown_container-text"]}>minutes</p>
            </div>
        </article>
    );
}

export default Countdown;