// importing components
import { Link } from 'react-router-dom';

// pet adoption component
function PetAdoption() {
    return (
        <div className="petAdoption">
            <div className="petAdoption__title h5">
                Pet Adoption
            </div>

            <div className="petAdoption__seeAdoptionList">
                <button type="button">
                    <Link to="/adoptionList">
                        Adoption List
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default PetAdoption;