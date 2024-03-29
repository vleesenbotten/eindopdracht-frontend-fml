import React from 'react';
import styles from "./InputElement.module.css"

function InputElement({name, inputType, placeholder, register, validationRules, errors}) {
    return (
        <>
            <label htmlFor={`${name}-field`} className={styles["input_label"]}>
                <p>{name}</p>
                <input
                    type={inputType}
                    id={`${name}-field`}
                    className={styles["input_field"]}
                    placeholder={placeholder}
                    {...register(name, validationRules)}
                />
                {errors[name] && <p className={styles["input_error"]}>{errors[name].message}</p>}
            </label>
        </>
    );
}

export default InputElement;