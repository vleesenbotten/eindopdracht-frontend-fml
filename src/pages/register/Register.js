import React, {useContext, useRef, useState} from 'react';
import {useForm} from "react-hook-form";
import AuthForm from "../../components/authform/AuthForm";
import InputElement from "../../components/inputelement/InputElement";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {useNavigate} from "react-router";

function Register() {
    // const {endpoint} = useContext((AuthContext));
    const navigate = useNavigate();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}, watch} = useForm({mode: "onChange"})
    const password = useRef({});
    password.current = watch("password");

    async function requestRegister(data) {
        toggleError(false);
        toggleLoading(true);
        console.log("Dang this shit works?")
        try {
            console.log(data.email, data.name, data.password);
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                "username": data.username,
                "email": data.email,
                "password": data.password,
                "role": ["user"],
            });
            navigate('/login');
        } catch(e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <AuthForm clickHandler={handleSubmit(requestRegister)}
                      text="Register"
                      error={error && <span>This account already exists. Try a different e-mail.</span>}
                      loading={loading && <span>Loading...</span>}
            >
                <InputElement
                    errors={errors}
                    register={register}
                    required
                    name="email"
                    inputType="text"
                    placeholder="enter e-mail"
                    validationRules={{
                        required: "email is required",
                        pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$/,
                            message: "enter a valid email"
                        }
                    }}
                />
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
                    }
                    }
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
                        minLength: {
                            value: 6,
                            message: "password should at least be 6 characters long"
                        }
                    }}
                />
                <InputElement
                    errors={errors}
                    register={register}
                    required
                    name="confirmPassword"
                    inputType="password"
                    placeholder="repeat your password"
                    validationRules={{
                        required: "password is required",
                        validate: value =>
                                value === password.current || "the passwords do not match"
                    }}
                />
            </AuthForm>
        </>
    );
}

export default Register;