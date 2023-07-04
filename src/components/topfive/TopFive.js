import React from 'react';
import styles from "../../components/topfive/TopFive.module.css";
import {Link} from "react-router-dom";

function TopFive() {
    return (
        <div>
            <h2 className={styles["topFive_heading-color"]}>🔥Our Top Five Games🔥</h2>
            <div className={styles["topFive_text-constrictor"]}>
                    <p>At PixelPress, our aim is to bring you the absolute best gaming experiences. Therefore, we carefully curate an annual list featuring the top five video games. </p>
                       <p> Take a look at our current top five picks for 2023:</p>
                    <ul className={styles["topFive_ul"]}>
                        <li className={styles["topFive_li"]}>
                            <Link to={"/game/5563"} className={styles["topFive_link"]}>1. Fallout New Vegas</Link>
                        </li>
                        <li className={styles["topFive_li"]}>
                            <Link to={"/game/516111"} className={styles["topFive_link"]}>2. Mass Effect: Legendary Edition</Link>
                        </li>
                        <li className={styles["topFive_li"]}>
                            <Link to={"/game/16003"} className={styles["topFive_link"]}>3. Baldur's Gate II: Enhanced Edition</Link>
                        </li>
                        <li className={styles["topFive_li"]}>
                            <Link to={"/game/16113"} className={styles["topFive_link"]}>4. Sleeping Dogs</Link>
                        </li>
                        <li className={styles["topFive_li"]}>
                            <Link to={"/game/262382"} className={styles["topFive_link"]}>5. Disco Elysium</Link>
                        </li>
                    </ul>
            </div>
        </div>
    );
}

export default TopFive;