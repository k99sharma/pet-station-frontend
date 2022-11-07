// importing components
import { useContext } from "react";
import { useQuery } from "react-query";

import PetCard from "../PetCard/PetCard";

// importing utilities
import { fetchAllUserPets } from "../../utils/helper";

// importing context
import AuthContext from "../../context/auth";

// dashboard pet show component
function DashboardPetShow() {
    const authCtx = useContext(AuthContext)

    const { isLoading, error, data } = useQuery('pet', () => {
        const response = fetchAllUserPets(authCtx.user.userId, authCtx.token)
        return response;
    })

    if (isLoading)
        return <div>...Loading</div>

    if (error)
        return <div>Error</div>

    if (data.error)
        return <div>Error data</div>

    return (
        <div className="dashboardPetShow">
            <div className="dashboardPetShow__header h6 mb-4">
                Available Pets
            </div>

            {
                data.data.length !== 0
                    ?
                    <div className="dashboardPetShow__cards d-flex">
                        {
                            data.data.map(pet => <div key={pet.name}><PetCard data={pet} token={authCtx.token} /></div>)
                        }
                    </div>
                    :
                    <div className="dashboardPetShow__noPets">
                        No pets available.
                    </div>
            }
        </div>
    )
}

export default DashboardPetShow;