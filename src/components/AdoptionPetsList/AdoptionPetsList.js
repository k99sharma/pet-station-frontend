// importing components
import { useQuery } from "react-query";

// importing utilities
import { fetchAllPetsAvailableForAdoption } from "../../utils/helper";

// adoption pets list
function AdoptionPetsList(_props) {
    const { token } = _props;

    const { isLoading, error, data } = useQuery('adoptionPet', async () => {
        const response = await fetchAllPetsAvailableForAdoption(token)
        return response;
    })

    if (isLoading)
        return <div>...Loading</div>

    if (error)
        return <div>Error</div>

    if (data.error)
        return <div>Error message</div>

    return (
        <div className="adoptionPetsList">
            {
                data.data.length !== 0
                    ?
                    data.data.map(pet => <div key={pet.data.name}>{pet.data.name}</div>)
                    :
                    <div>None</div>
            }
        </div>
    )
}

export default AdoptionPetsList;