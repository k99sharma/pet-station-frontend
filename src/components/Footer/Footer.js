// importing css
import './Footer.css';

import { Link } from 'react-router-dom'

// footer components
function Footer() {
    return (
        <div className="footer mt-auto d-flex flex-column justify-content-between p-5">
            <div className="footer__brand">
                <img
                    src="/assets/logo.png"
                    width={50}
                    height={50}
                    alt="pet station logo"
                />{" "}
                <Link className="text-decoration-none text-white" to="/">
                    Pet Station
                </Link>
            </div>

            <div className="footer__copyright">
                © 2022 Pet Station. All rights reserved.
            </div>
        </div>
    )
}

export default Footer;