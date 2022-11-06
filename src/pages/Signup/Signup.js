// importing components
import { Link } from 'react-router-dom';

import SignupForm from '../../components/SignupForm/SignupForm';

// signup component
function Signup() {
    return (
        <div className="signup container">
            <div className="signup__header h1">
                Signup Page
            </div>

            <div className="signup__subheader">
                Already have an account? <Link to="/login">Login</Link>
            </div>

            <div className="signup__form mt-5">
                <SignupForm />
            </div>
        </div>
    )
}

export default Signup;