// importing components
import { useQuery } from "react-query";

import AdoptionPetCard from '../AdoptionPetCard/AdoptionPetCard'

import Loading from "../Loading/Loading";

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
        return <Loading />

    if (error)
        return <div>Error</div>

    if (data.error)
        return <div>Error message</div>

    return (
        <div className="adoptionPetsList">
            {
                console.log(data.data)
            }
            {
                data.data.length !== 0
                    ?
                    <div className="userPetShow__cardShow row row-cols-1 row-cols-md-3 row-cols-lg-4 p-3 rounded">
                        {
                            data.data.map(pet => <AdoptionPetCard token={token} key={pet.data.name} pet={pet.data} />)
                        }
                    </div>
                    :
                    <div>None</div>
            }
        </div>
    )
}

export default AdoptionPetsList;