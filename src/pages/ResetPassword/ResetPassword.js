// importing components
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// reset password page
function ResetPassword() {
    const handleSubmit = (values, actions) => {
        // TODO: still not working

        console.log(values);
        actions.resetForm();
        actions.setSubmitting(false);
    }

    return (
        <div className="resetPassword container">
            <div className="resetPassword__header h1">
                Reset Password
            </div>

            <div className="resetPassword__subheader">
                You will receive an email with the link to reset password
            </div>

            <div className="resetPassword__form mt-4">
                <Formik
                    initialValues={{
                        email: ''
                    }}

                    validationSchema={Yup.object().shape({
                        email: Yup.string().email()
                            .required('Required.')
                    })}

                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form autoComplete="off">
                            <div className="mb-1">
                                <Field type="email" name="email" placeholder="Email Address" />
                                <ErrorMessage name="email" component="div" />
                            </div>

                            <div className="mt-4">
                                <button type="submit" disabled={isSubmitting}>
                                    Reset Password
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ResetPassword;