import { useQuery } from "react-query";

// importing utilities
import { fetchAllUserPetsForAdoption } from "../../utils/helper";

// dashboard user pets for adoption component
function DashboardUserPetForAdoption(_props) {
    const { user, token } = _props;

    const { isLoading, error, data } = useQuery('pet', () => {
        const response = fetchAllUserPetsForAdoption(user.userId, token)

        return response;
    })

    if (isLoading)
        return <div>...Loading</div>

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
                        data.data.map(pet => <div>{pet.name}</div>)
                        :
                        <div>No pet is available</div>
                }
            </div>
        </div>
    )
}

export default DashboardUserPetForAdoption;