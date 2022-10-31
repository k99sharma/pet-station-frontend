// importing components
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {
                    children
                }
            </main>
            <Footer />
        </>
    )
}

export default Layout;