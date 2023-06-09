import React, {useContext, useRef, useState} from 'react';
import {useForm} from "react-hook-form";
import AuthForm from "../../components/authform/AuthForm";
import InputElement from "../../components/inputelement/InputElement";


function Login() {

    const {register, handleSubmit, formState: {errors}, watch} = useForm({mode: "onChange"})


    async function requestLogin(data) {

    }

    return (
        <>
            <AuthForm clickHandler={handleSubmit(requestLogin)}
                      text="Login"
                      error={error && <span>Combination of e-mail and password is incorrect.</span>}
                      loading={loading && <span>Loading...</span>}
            >

            </AuthForm>
            </>
    );
}

export default Login;