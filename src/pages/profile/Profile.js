import React, {useEffect, useState} from 'react';
// import axios from "axios";

function Profile() {
    // const [userData, setUserData] = useState("");
    // const [error, toggleError] = useState(false);
    // const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchProfileData(){
            // toggleError(false);
            // toggleLoading(true);
            // try{
            //     // const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user');
            //     // setUserData(result.data);
            // } catch(e){
            //     console.error(e);
            //     toggleError(true);
            // }
            // toggleLoading(false);
        };

        fetchProfileData();
    }, [])

    return (
        <>
            <img src="https://via.placeholder.com/150x150" alt="logo"/>
            <h1>A very lovely username</h1>
            {/*<p>{userData.username}</p>*/}
            <p>there will be an username here</p>
            {/*<p>{userData.email}</p>*/}
            <p>there will be an email here</p>
            {/*<p>{userData.info}</p>*/}
            <p>maybe you filled out some info</p>
            <p>if you wish to change anything about you - dont. you are beautiful as you are</p>
            <p>also i didn't want to implement that function</p>
        </>
    );
}

export default Profile;