import React from 'react';
import { useForm } from "react-hook-form";
import AuthForm from "../../components/authform/AuthForm";

function Login() {
    const { register, handleSubmit, formState: {errors}, watch } = useForm({mode: "onChange"})

    function requestLogin(){
        console.log("Dang this shit works?")
    }

    return (
        <>
            <AuthForm clickHandler={handleSubmit(requestLogin)}
                      text="Login">

            </AuthForm>
        </>
    );
}

export default Login;