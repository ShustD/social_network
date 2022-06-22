import { Field, Form, Formik } from "formik";
import React from "react";


export const LoginPage = (props) => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm />
        </div>
    )
}

const LoginReduxForm = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}>
            <Form>
                <div>
                    <Field type="email" name="email" />
                </div>
                <div>
                    <Field type="password" name="password" />
                </div>
                <Field type="checkbox" name="checkbox" />
                <button type="submit" >
                    Login
                </button>
            </Form>
        </Formik>
    )

}

