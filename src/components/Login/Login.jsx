import { Field, Form, Formik } from "formik";
import React from "react";
import { validatorLogin } from "../../Validators/validator";
import s from "./LoginPage.module.css"

export const LoginPage = (props) => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm />
        </div>
    )
}
const LoginForm = (props) => {
    
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(value) => {
                console.log(value);
              }}
              validationSchema={validatorLogin}>
                {({ errors, touched }) => (
                    <Form>
                <div>
                    <Field type="email" name="email" component="input"/>
                    {errors.email && touched.email ? <div className={s.errors}>{errors.email}</div> : null}
                </div>
                <div>
                    <Field type="password" name="password" />
                    {errors.password && touched.email ? <div className={s.errors}>{errors.password}</div> : null}
                </div>
                <Field type="checkbox" name="checkbox" />
                <button type="submit" >
                    Login
                </button>
            </Form>
                )}
            
        </Formik>
    )

}

