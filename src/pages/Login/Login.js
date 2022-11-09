// importing components
import { Link } from 'react-router-dom';

// importing components
import LoginForm from '../../components/LoginForm/LoginForm';

// login component
function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="login container p-2">
                <div className="login__header h1">
                    Login Page
                </div>

                <div className="login__subheader">
                    {
                        `Don't have an account? `
                    }
                    <Link to="/signup">Signup</Link>
                </div>

                <div className="login__form mt-5">
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