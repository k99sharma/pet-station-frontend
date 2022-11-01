// importing components
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <Router>
            <Navbar />
            {
                children
            }
            <Footer />
        </Router>
    )
}

export default Layout;