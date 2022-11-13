// importing css
import './UserPetShow.css'

// importing components
import { useContext } from "react";
import { useQuery } from "react-query";

import PetCard from "../PetCard/PetCard";
import Loading from "../Loading/Loading";

// importing utilities
import { fetchAllUserPets } from "../../utils/helper";

// importing context
import AuthContext from "../../context/auth";

// dashboard pet show component
function UserPetShow() {
    const authCtx = useContext(AuthContext)

    const { isLoading, error, data } = useQuery('pet', () => {
        const response = fetchAllUserPets(authCtx.user.userId, authCtx.token)
        return response;
    })

    if (isLoading)
        return <Loading />

    if (error)
        return <div>Error</div>

    if (data.error)
        return <div>Error data</div>

    return (
        <div className="userPetShow">
            {
                data.data.length !== 0
                    ?
                    <div className="userPetShow__cards d-flex p-2 rounded">
                        {
                            data.data.map(pet => <div key={pet.name}><PetCard data={pet} token={authCtx.token} /></div>)
                        }
                    </div>
                    :
                    <div className="userPetShow__noPet d-flex justify-content-center align-items-center">
                        <div className="userPetShow__noPet__card rounded p-3">
                            <div className="userPetShow__noPet__card__illustration text-center">
                                <img
                                    width={150}
                                    height={150}
                                    src="/assets/notFound1.svg"
                                    alt="not found"
                                />
                            </div>

                            <div className="userPetShow__noPet__card__text text-center h6">
                                No Pet Available
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default UserPetShow;