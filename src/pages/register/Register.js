import React from 'react';
import { useForm } from "react-hook-form";
import AuthForm from "../../components/authform/AuthForm";

function Register() {
    const { register, handleSubmit, formState: {errors}, watch } = useForm({mode: "onChange"})

    function requestRegister(){
        console.log("Dang this shit works?")
    }

    return (
        <>
            <AuthForm clickHandler={handleSubmit(requestRegister)}
                      text="Register">

            </AuthForm>
        </>
    );
}

export default Register;