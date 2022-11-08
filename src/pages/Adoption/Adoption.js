// import components
import { useContext } from 'react';

import AdoptionPetsList from "../../components/AdoptionPetsList/AdoptionPetsList";

// importing context
import AuthContext from '../../context/auth';

// adoption list function 
function Adoption() {
    const authCtx = useContext(AuthContext);

    return (
        <div className="adoptionList container my-4">
            <div className="adoptionList__header h2">
                Adoption Page
            </div>

            <div className="adoptionList__pets">
                <AdoptionPetsList user={authCtx.user} token={authCtx.token} />
            </div>
        </div>
    )
}

export default Adoption;