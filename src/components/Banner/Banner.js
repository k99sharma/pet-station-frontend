// importing components
import { Link } from 'react-router-dom';

// Banner component
export default function Banner() {
    return (
        <Link to="/">
            <div className="banner inline-flex items-center p-2">
                <div className="banner__logo">
                    <img
                        src='/assets/paw1.png'
                        className="w-8 h-8"
                        alt="logo"
                    />
                </div>

                <div className="banner__name text-lg mx-4">
                    Pet Station
                </div>
            </div>
        </Link>
    )
}               