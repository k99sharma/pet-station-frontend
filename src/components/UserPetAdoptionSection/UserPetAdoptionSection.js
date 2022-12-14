/* eslint-disable react/prop-types */
// importing components
import { useQuery } from "react-query";

import AdoptionPetsDisplay from "../AdoptionPetsDisplay/AdoptionPetsDisplay";
import AdoptPet from "../AdoptPet/AdoptPet";

// importing helper functions
import { fetchPetsData } from "../../utilities/helper";

export default function UserPetAdoptionSection(props) {
    // props
    const { token } = props;

    // fetch pet information
    const { isLoading, error, data } = useQuery('pet', () => fetchPetsData(token));

    if (isLoading)
        return <div>Loading ...</div>

    if (error)
        return <div>Normal Error</div>


    return (
        <div className="userPetAdoptionSection">
            <div className="profile-petsAdoption-header flex items-center">
                <div className="profile-petsAdoption-header-image">
                    <img
                        src="/assets/profile3.png"
                        height={100}
                        width={100}
                        alt="pet section header"
                    />
                </div>

                <div className="profile-petsAdoption-header-content mx-10">
                    <div className="profile-petsAdoption-header-content-heading text-2xl font-lighter">
                        {
                            `Your Pet's Adoption`
                        }
                    </div>

                    <div className="profile-petsAdoption-header-content-newPet  my-3">
                        <AdoptPet
                            pets={data.data.data.pets}
                            token={token}
                        />
                    </div>
                </div>
            </div>

            <div className="profile-petsAdoption-display-pets">
                <AdoptionPetsDisplay
                    pets={data.data.data.pets}
                    token={token}
                />
            </div>
        </div>
    )
}