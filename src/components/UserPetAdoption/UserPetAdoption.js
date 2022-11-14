import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

// importing utilities
import { fetchAllUserPetsForAdoption, completeAdoption } from "../../utils/helper";

function AdoptionPetCard(_props) {
    const { pet, token } = _props;

    const handleClick = async () => {
        const response = await completeAdoption(pet.petId, token)

        if (response.error)
            alert('Adoption cannot be completed.')

        else
            alert('Adoption Completed.')
    }

    return (
        <div className="adoptionPetCard">
            <div className="adoptionPetCard__info">
                {
                    pet.name
                }
            </div>

            <div>
                <button type="button" onClick={handleClick}>
                    Complete Adoption
                </button>
            </div>
        </div>
    )
}

// dashboard user pets for adoption component
function UserPetAdoption(_props) {
    const { user, token } = _props;

    const { isLoading, error, data } = useQuery('pet', () => {
        const response = fetchAllUserPetsForAdoption(user.userId, token)

        return response;
    })

    if (isLoading)
        return <Loading />

    if (error)
        return <div>Error</div>

    if (data.error)
        return <div>Error data</div>

    return (
        <div className="dashboardUserPetForAdoption">
            <div className="dashboardUserPetForAdoption__pet">
                {
                    data.data.length !== 0
                        ?
                        data.data.map(pet => <AdoptionPetCard key={pet.name} pet={pet} token={token} />)
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
        </div>
    )
}

export default UserPetAdoption;