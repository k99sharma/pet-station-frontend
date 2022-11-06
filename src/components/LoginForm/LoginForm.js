// importing components
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// importing utilities functions
import { loginUser } from '../../utils/helper';

// importing context
import AuthContext from '../../context/auth';


// login form component
function LoginForm() {
    // auth context
    const authCtx = useContext(AuthContext);

    const navigator = useNavigate();

    // form submit handler
    const handleSubmit = async (values, actions) => {
        const response = await loginUser(values.email, values.password);

        // in case of error
        if (response.error) {
            alert('Login Failed.');

            // form actions
            actions.setSubmitting(false);
            actions.resetForm();
        }
        else {
            // log in is successful
            authCtx.login(response.data.token);
            navigator('/', { replace: true })   // navigate to home after successful login
        }
    }

    return (
        <div className="loginForm">
            <Formik
                // initial values of parameters
                initialValues={{
                    email: '',
                    password: ''
                }}

                validationSchema={
                    Yup.object().shape({
                        email: Yup.string().email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .min(8, 'Minimum length of password should be 8 characters.')
                            .max(20, 'Maximum length of password should be 20 characters.')
                            .required('Required')
                    })
                }

                // on submitting form
                onSubmit={(values, actions) => {
                    handleSubmit(values, actions);
                }}
            >
                {({ isSubmitting }) => (
                    <Form autoComplete="off">
                        <div className="mb-2">
                            <Field type="email" name="email" placeholder="Email Address" />
                            <ErrorMessage name="email" component="div" />
                        </div>

                        <div className="mb-2">
                            <Field type="password" name="password" placeholder="Password" />
                            <ErrorMessage name="password" component="div" />
                        </div>

                        <div className="mt-3">
                            <button type="submit" disabled={isSubmitting}>
                                Login
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm;