// import css
import './SignupForm.css'

// importing components
import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

import Spinner from 'react-bootstrap/Spinner'

// importing states
import states from './statesList';

// importing helper
import { signupUser } from "../../utils/helper";

// signup form component
function SignupForm() {
    // navigator 
    const navigator = useNavigate();

    // submit handler
    const handleSubmit = async (values, actions) => {
        const response = await signupUser(values);

        if (response.error) {
            alert(response.message);
            actions.resetForm();
            actions.setSubmitting(false);
        } else {
            alert('Signup Successful.');
            navigator('/login', { replace: true })
        }
    }

    return (
        <div className="signupForm">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    gender: '',
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                    street: '',
                    region: '',
                    country: 'India',       // TODO: need to fix this 
                    postalZip: ''
                }}

                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .min(2, 'Minimum length should be 2 characters.')
                            .max(15, 'Maximum length should be 15 characters.')
                            .required('Required.'),
                        lastName: Yup.string()
                            .min(2, 'Minimum length should be 2 characters.')
                            .max(15, 'Maximum length should be 15 characters.')
                            .required('Required.'),
                        email: Yup.string().email()
                            .required('Required.'),
                        gender: Yup.string()
                            .required('Select gender.')
                            .oneOf(['male', 'female', 'others']),
                        password: Yup.string()
                            .min(6, 'Minimum length should be 6 characters.')
                            .required('Password is required.'),
                        passwordConfirmation: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Password do not match.')
                            .required('Password confirmation is required.'),
                        street: Yup.string()
                            .min(5, 'Minimum length should be 5 characters')
                            .max(250, 'Maximum length should be 250 characters.')
                            .required('Required.'),
                        region: Yup.string()
                            .required('Select state.')
                            .oneOf(states),
                        postalZip: Yup.string()
                            .required('Required.')
                    })
                }

                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form autoComplete="off">
                        <div className="mb-2 d-flex">
                            <div className="mx-1">
                                <Field className="inputField" type="text" name="firstName" placeholder="First Name" />
                                <ErrorMessage className="errorMessage" name="firstName" component="div" />
                            </div>

                            <div className="mx-1">
                                <Field className="inputField" type="text" name="lastName" placeholder="Last Name" />
                                <ErrorMessage className="errorMessage" name="lastName" component="div" />
                            </div>
                        </div>

                        <div className="mb-2 d-flex">
                            <div className="mx-1">
                                <Field className="inputField" type="email" name="email" placeholder="example@email.com" />
                                <ErrorMessage className="errorMessage" name="email" component="div" />
                            </div>

                            <div className="mx-1">
                                <Field className="inputField" as="select" name="gender">
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </Field>
                            </div>
                        </div>

                        <div className="mb-2 mx-1">
                            <Field className="inputField" type="password" name="password" placeholder="Password" />
                            <ErrorMessage className="errorMessage" name="password" component="div" />
                        </div>

                        <div className="mb-2 mx-1">
                            <Field className="inputField" type="password" name="passwordConfirmation" placeholder="Confirm Password" />
                            <ErrorMessage className="errorMessage" name="passwordConfirmation" component="div" />
                        </div>

                        <div className="mb-2 mx-1">
                            <Field className="inputField" name="street" as="textarea" placeholder="Street Address" />
                            <ErrorMessage className="errorMessage" name="street" component="div" />
                        </div>

                        <div className="mb-2 d-flex justify-content-between">
                            <div className="mx-1">
                                <Field className="inputField" name="region" as="select">
                                    <option value="">State</option>
                                    {
                                        states.map((state) => <option key={state} value={state}>{state}</option>)
                                    }
                                </Field>
                            </div>

                            <div>
                                <Field className="inputField" type="text" name="postalZip" placeholder="Postal Zip" />
                                <ErrorMessage className="errorMessage" name="postalZip" component="div" />
                            </div>
                        </div>

                        <div className="mt-4 mx-1">

                            <button className="signup__container__signupButton py-2 rounded" type="submit" disabled={isSubmitting}>
                                {
                                    isSubmitting
                                        ?
                                        <Spinner animation="border" role="status" size="sm">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                        :
                                        `${'Signup'}`
                                }
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default SignupForm;