// import css
import './Signup.css'

// importing components
import { Link } from 'react-router-dom';

import SignupForm from '../../components/SignupForm/SignupForm';
import AuthFooter from '../../components/AuthFooter/AuthFooter';

// signup component
function Signup() {
    return (
        <div className="signup d-flex flex-column align-items-center justify-content-center my-5">
            <div className="signup__container d-flex">
                <div className="d-none d-md-flex signup__container__illustration justify-content-center align-items-center">
                    <img
                        className="img-fluid signup__container__illustration__svg"
                        src="/assets/signup.svg"
                        alt="signup"
                    />
                </div>

                <div className="signup__container__form d-flex align-items-center justify-content-center flex-column p-4">
                    <div className="signup__container__form__header">
                        Signup
                    </div>

                    <div className="signup__container__form__subheader my-2">
                        Hey, Enter your details to create a new account
                    </div>

                    <div className="signup__container__form__form my-3">
                        <SignupForm />
                    </div>

                    <div className="signup__container__footer text-center">
                        {
                            `Already have an account? `
                        }
                        <Link className="link boldText" to="/login">Sign in</Link>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <AuthFooter />
            </div>
        </div>
    )
}

export default Signup;