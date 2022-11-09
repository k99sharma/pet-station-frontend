// importing components
import { BrowserRouter as Router } from 'react-router-dom';
import CustomNavbar from '../Navbar/Navbar';


// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <Router>
            <CustomNavbar />
            {
                children
            }
        </Router>
    )
}

export default Layout;