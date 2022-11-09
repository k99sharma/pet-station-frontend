// import css
import './Signup.css'

// importing components
import { Link } from 'react-router-dom';

import SignupForm from '../../components/SignupForm/SignupForm';
import AuthFooter from '../../components/AuthFooter/AuthFooter';

// signup component
function Signup() {
    return (
        <div className="signup d-flex flex-column justify-content-center align-items-center">
            <div className="signup__container my-5 p-5">
                <div className="signup__container__header mb-2">
                    Sign Up
                </div>

                <div className="signup__container__subheader">
                    Hey, Enter your details to create account
                </div>

                <div className="signup__container__form mt-5">
                    <SignupForm />
                </div>

                <div className="signup__container__footer text-center mt-4">
                    {
                        `Already have an account? `
                    }
                    <Link className="link boldText" to="/login">Login</Link>
                </div>
            </div>

            <div>
                <AuthFooter />
            </div>
        </div>
    )
}

export default Signup;