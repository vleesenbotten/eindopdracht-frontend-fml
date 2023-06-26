import React from 'react';
import styles from "./AuthForm.module.css";
import Button from "../button/Button";

function AuthForm({clickHandler, children, text, error, loading}) {
    return (
            <form onSubmit={clickHandler} className={ styles["form"]}>
                <h1 className={ styles["form_h1"]}>{text}</h1>
                {children}
                <Button type="submit"
                        name={text}/>
                <p>{error}{loading}</p>
            </form>
    );
}

export default AuthForm;