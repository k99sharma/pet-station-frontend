// importing components
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';

// signup components
function Signup() {
    const [credentials, setCredentials] = useState(null);

    useEffect(() => {
        console.table(credentials);
    }, [credentials])

    return (
        <div className="signup container">
            <h1>
                Signup Page
            </h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    gender: '',
                    email: '',
                    password: '',
                    street: '',
                    region: '',
                    country: '',
                    postalZip: ''
                }}

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
                    <Form className="signupForm">
                        <div className="mb-1">
                            <Field type="text" name="firstName" placeholder="First Name" />
                            <ErrorMessage name="firstName" component="div" />
                        </div>

                        <div className="mb-1">
                            <Field type="text" name="lastName" placeholder="Last Name" />
                            <ErrorMessage name="lastName" component="div" />
                        </div>

                        <div className="mb-1">
                            <div>
                                Gender
                            </div>
                            <label htmlFor='gender'>
                                <Field type="radio" name="gender" value="male" />
                                Male
                            </label>
                            <label htmlFor='gender'>
                                <Field type="radio" name="gender" value="female" />
                                Female
                            </label>
                            <ErrorMessage name="gender" component="div" />
                        </div>

                        <div className="mb-1">
                            <Field type="email" name="email" placeholder="Email Address" />
                            <ErrorMessage name="email" component="div" />
                        </div>


                        <div className="mb-1">
                            <Field type="password" name="password" placeholder="Password" />
                            <ErrorMessage name="password" component="div" />
                        </div>


                        <div className="mb-1">
                            <Field type="text" name="street" placeholder="Street" />
                            <ErrorMessage name="street" component="div" />
                        </div>



                        <div className="mb-1">
                            <Field type="text" name="region" placeholder="Region" />
                            <ErrorMessage name="region" component="div" />
                        </div>

                        <div className="mb-1">
                            <Field type="text" name="country" placeholder="Country" />
                            <ErrorMessage name="country" component="div" />
                        </div>


                        <div className="mb-1">
                            <Field type="text" name="postal" placeholder="Postal Zip" />
                            <ErrorMessage name="postal" component="div" />
                        </div>

                        <div className="mt-4">
                            <button type="submit" disabled={isSubmitting}>
                                Signup
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Signup;