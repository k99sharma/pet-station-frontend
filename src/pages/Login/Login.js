// import css
import './Login.css'

// importing components
import { Link } from 'react-router-dom';

// importing components
import LoginForm from '../../components/LoginForm/LoginForm';

// login component
function Login() {
    return (
        <div className="login d-flex justify-content-center align-items-center">
            <div className="login__container p-5 d-flex flex-column align-items-center">
                <div className="login__container__header h1">
                    Login Page
                </div>

                <div className="login__container__subheader">
                    {
                        `Don't have an account? `
                    }
                    <Link to="/signup">Signup</Link>
                </div>

                <div className="login__container__form mt-5">
                    <LoginForm />
                </div>

                <div className="login__from mt-3">
                    <Link to="/resetPassword">
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;