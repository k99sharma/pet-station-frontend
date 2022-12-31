// importing components
import { StrictMode, useContext, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

// importing socket
import socket from '../../websocket/socketio';

// importing context
import AuthContext from '../../context/auth';

// importing pages
import Page404 from '../../pages/404/404';
import HomePage from '../../pages/Home/Home';
import LoginPage from '../../pages/Login/Login';
import SignupPage from '../../pages/Signup/Signup';
import DashboardPage from '../../pages/Dashboard/Dashboard';

// App component
export default function App() {
	const authCtx = useContext(AuthContext); // auth context

	useEffect(() => {
		// function to make socket connection
		function socketConnection() {
			socket.connect();
			localStorage.setItem('userId', authCtx.user.userId);
		}

		socketConnection(); // invoke socket connection
	}, []);

	return (
		<StrictMode>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					{authCtx.isLoggedIn ? (
						<Route exact path="/dashboard" element={<DashboardPage />} />
					) : (
						<>
							<Route exact path="/login" element={<LoginPage />} />
							<Route exact path="/signup" element={<SignupPage />} />
						</>
					)}

					{/* not found */}
					<Route exact path="*" element={<Page404 />} />
				</Routes>
			</Router>
		</StrictMode>
	);
}
