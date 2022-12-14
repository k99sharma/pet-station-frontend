/* eslint-disable react/prop-types */
// importing components
import { useQuery } from "react-query";

import UserPetSection from "../UserPetSection/UserPetSection";
import UserPetAdoptionSection from "../UserPetAdoptionSection/UserPetAdoptionSection";

// importing helper function 
import { fetchPetsData } from "../../utilities/helper";

export default function PetSection(props) {
    // props
    const { token } = props;

    // fetch pet information
    const { isLoading, error, data } = useQuery('pet', () => fetchPetsData(token));

    if (isLoading)
        return <div>Loading ...</div>

    if (error)
        return <div>Normal Error</div>

    return (
        <div className="petSection">
            <div className="petSection-userPetSection">
                <UserPetSection
                    pets={data.data.data.pets}
                    token={token}
                />
            </div>

            <div className="petSection-userPetAdoptionSection">
                <UserPetAdoptionSection
                    pets={data.data.data.pets}
                    token={token}
                />
            </div>
        </div>
    )
}