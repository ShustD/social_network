import { Field, Form, Formik } from "formik";
import React from "react";



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
            onSubmit={(values) => {
                console.log(values);
              }}>
            <Form>
                <div>
                    <Field type="email" name="email" component="input"/>
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

