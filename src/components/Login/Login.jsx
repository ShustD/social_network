import { Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/authReducer";
import { validatorLogin } from "../../Validators/validator";
import s from "./LoginPage.module.css"

export let LoginPage = (props) => {
      
    if (props.isAuth === true) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm {...props} />
        </div>
    )
}
const LoginForm = (props) => {
    
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(value) => {
                props.login(value.email, value.password, value.rememberMe);
              }}
              validationSchema={validatorLogin}>
                {({ errors, touched }) => (
                    <Form>
                <div>
                    <Field type="text" name="email" component="input"/>
                    {errors.email && touched.email ? <div className={s.errors}>{errors.email}</div> : null}
                </div>
                <div>
                    <Field type="password" name="password" component="input"/>
                    {errors.password && touched.email ? <div className={s.errors}>{errors.password}</div> : null}
                </div>
                <Field type="checkbox" name="rememberMe" component="input"/>
                <button type="submit" >
                    Login
                </button>
                {props.apiError ? <div className={s.errors}>{props.apiError}</div> : null}
            </Form>
                )}
            
        </Formik>
    )

}
const mapState = (state) => ({
    isAuth: state.auth.isAuth,
    apiError: state.auth.apiError
})

LoginPage = connect (mapState, {login})(LoginPage)