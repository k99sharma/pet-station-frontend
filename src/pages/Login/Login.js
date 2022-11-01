// importing components
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/auth';

// importing helpers
import {
    loginUser,
    getClientMachineInformation
} from '../../utils/helper';

// login components
function Login() {
    const navigator = useNavigate();
    const authCtx = useContext(AuthContext);

    return (
        <div className="login container">
            <h1>
                Login Page
            </h1>

            <div className="mb-4">
                Dont have an account? <Link to="/signup">Signup</Link>
            </div>

            <Formik
                initialValues={{ email: '', password: '' }}

                validate={values => {
                    // TODO: custom validation needed here

                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}

                onSubmit={async (values, actions) => {
                    setTimeout(() => {
                        actions.setSubmitting(false);
                    }, 400);

                    const res = await loginUser({
                        email: values.email,
                        password: values.password,
                        clientMachineInformation: getClientMachineInformation()
                    })

                    if (res.error) {
                        alert('Login failed!');
                    } else {
                        // setting value in auth context
                        authCtx.login(res.data.token);

                        // redirect user to dashboard
                        navigator('/dashboard', { replace: true })
                    }

                    // reset the form
                    actions.resetForm();
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="loginForm">
                        <div className="mb-1">
                            <Field type="email" name="email" placeholder="Email Address" />
                            <ErrorMessage name="email" component="div" />
                        </div>

                        <div className="mb-1">
                            <Field type="password" name="password" placeholder="Password" />
                            <ErrorMessage name="password" component="div" />
                        </div>

                        <div className="mt-4">
                            <button type="submit" disabled={isSubmitting}>
                                Login
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default Login;