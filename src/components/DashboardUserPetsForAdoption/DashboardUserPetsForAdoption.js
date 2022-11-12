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
                    Adopt
                </button>
            </div>
        </div>
    )
}

// dashboard user pets for adoption component
function DashboardUserPetForAdoption(_props) {
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
            <div className="dashboardUserPetForAdoption__header h6">
                Pets Put On Adoption
            </div>

            <div className="dashboardUserPetForAdoption__pet">
                {
                    data.data.length !== 0
                        ?
                        data.data.map(pet => <div key={pet.name}><AdoptionPetCard pet={pet} token={token} /></div>)
                        :
                        <div>No pet is available</div>
                }
            </div>
        </div>
    )
}

export default DashboardUserPetForAdoption;