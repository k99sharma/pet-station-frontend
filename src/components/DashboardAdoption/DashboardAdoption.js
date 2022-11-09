// importing components
import { useContext } from 'react';

import DashboardAddPetForAdoptionButton from "../DashboardAddPetForAdoptionButton/DashboardAddForAdoptionButton";
import DashboardUserPetForAdoption from '../DashboardUserPetsForAdoption/DashboardUserPetsForAdoption';

// importing context
import AuthContext from '../../context/auth';

// user dashboard adoption component
function DashboardAdoption() {
    const authCtx = useContext(AuthContext);

    return (
        <div className="dashboardAdoption">
            <div className="dashboardAdoption__header h4">
                Pet Adoption
            </div>

            <div className="dashboardAdoption__addForAdoptionButton my-4">
                <DashboardAddPetForAdoptionButton user={authCtx.user} token={authCtx.token} />
            </div>

            <div className="dashboardAdoption__petForAdoption">
                <DashboardUserPetForAdoption user={authCtx.user} token={authCtx.token} />
            </div>

            <div className="dashboardAdoption__adoptionHistory my-3">
                <button type="button">
                    Adoption History
                </button>
            </div>
        </div>
    )
}

export default DashboardAdoption;