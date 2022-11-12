// import css
import './Login.css'

// importing components
import { Link } from 'react-router-dom';

// importing components
import LoginForm from '../../components/LoginForm/LoginForm';
import AuthFooter from '../../components/AuthFooter/AuthFooter';

// login component
function Login() {
    return (
        <div className="login d-flex flex-column justify-content-center align-items-center">
            <div className="login__container my-5 p-5">
                <div className="login__container__header mb-2">
                    Sign in
                </div>

                <div className="login__container__subheader">
                    Hey, Enter your details to get sign in <br /> to your account
                </div>

                <div className="login__container__form mt-5">
                    <LoginForm />
                </div>

                <div className="login__container__footer text-center mt-4">
                    {
                        `Don't have an account? `
                    }
                    <Link className="link boldText" to="/signup">Register</Link>
                </div>
            </div>

            <div>
                <AuthFooter />
            </div>
        </div>
    )
}

export default Login;