import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../../context/FavoriteContext';
import axios from 'axios';
import Error from '../../components/error/Error';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/loading/Loading';
import Background from '../../components/background/Background';
import styles from './Profile.module.css';
import FavoriteButton from "../../components/favoritebuton/FavoriteButton";
import ProfileImage from "../../components/profileImage/ProfileImage";

function Profile() {
    const { favorites } = useContext(FavoriteContext);
    const [userData, setUserData] = useState('');
    const { user } = useContext(AuthContext);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchProfileData() {
            toggleLoading(true);
            toggleError(false);
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get(
                    'https://frontend-educational-backend.herokuapp.com/api/user',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log(result.data);
                setUserData(result.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        void fetchProfileData();
    }, []);

    return (
        <section className={styles['profile_container']}>
            <section className={styles['profile_section-one']}>
            <ProfileImage />
                <article className={styles['profile_information']}>
                    <h2>profile</h2>
                    <h3>your username</h3>
                    <p>{user.username}</p>
                    <h3>your email</h3>
                    <p>{user.email}</p>
                    <span className={styles['profile_small-text']}>
            <p>if you wish to change anything about you - dont. you are beautiful as you are</p>
            <p>also i didn't want to implement that function</p>
          </span>
                    {error && <Error />}
                    {loading && <Loading />}
                </article>
            </section>

            <section className={styles['profile_section-two']}>
                <h1>favorites</h1>
                {favorites.length > 0 ? (
                    <ul className={styles['profile_section-two_ul']}>
                        {favorites.map((game) => (
                            <li key={game.id} className={styles['profile_section-two_li']}>
                                <Link to={`/game/${game.id}`} className={styles['profile_section-two_link']}>
                                    {game.name}
                                </Link>
                                <FavoriteButton game={game} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No favorites found.</p>
                )}
            </section>
            <Background />
        </section>
    );
}

export default Profile;
