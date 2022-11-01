// importing components
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useEffect, useState } from 'react';

// login components
function Login() {
    const [credentials, setCredentials] = useState(null);

    // need to login user
    useEffect(() => {
        console.table(credentials);
    }, [credentials])

    return (
        <div className="login container">
            <h1>
                Login Page
            </h1>

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

                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        actions.setSubmitting(false);
                    }, 400);

                    // setting data into our states
                    setCredentials(values);

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