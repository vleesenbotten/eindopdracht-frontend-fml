import React, {useContext, useRef, useState} from 'react';
import {useForm} from "react-hook-form";
import AuthForm from "../../components/authform/AuthForm";
import InputElement from "../../components/inputelement/InputElement";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";

function Login() {
    const { userLogin } = useContext(AuthContext);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}, watch} = useForm({mode: "onChange"})
    const password = useRef({});
    password.current = watch("password")

    async function requestLogin(data) {
        toggleError(false);
        toggleLoading(true);
        console.log("Dang this shit works?")
        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                "username": data.username,
                "password": data.password,
            })
            console.log(result.data);
            userLogin(result.data.accessToken);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <AuthForm clickHandler={handleSubmit(requestLogin)}
                      text="Login"
                      error={error && <span>Combination is incorrect.</span>}
                      loading={loading && <span>Loading...</span>}
            >
                <InputElement
                    errors={errors}
                    register={register}
                    required
                    name="username"
                    inputType="text"
                    placeholder="enter your username"
                    validationRules={{
                        required: "username is required",
                        minLength: {
                            value: 6,
                            message: "username should at least be 6 characters long"
                        }
                    }}
                />
                <InputElement
                    errors={errors}
                    register={register}
                    required
                    name="password"
                    inputType="password"
                    placeholder="enter password"
                    validationRules={{
                        required: "password is required",
                    }}
                />
                <p>don't have an account yet? <Link to={"/register"}>register here</Link></p>
            </AuthForm>
        </>
    );
}

export default Login;