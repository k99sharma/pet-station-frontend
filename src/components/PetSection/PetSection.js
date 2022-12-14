/* eslint-disable react/prop-types */

// importing components
import { useQuery } from "react-query";

import NewPet from "../NewPet/NewPet";
import PetsDisplay from "../PetsDisplay/PetsDisplay";
import AdoptionPetsDisplay from "../AdoptionPetsDisplay/AdoptionPetsDisplay";
import AdoptPet from "../AdoptPet/AdoptPet";


// importing helper functions
import { fetchPetsData } from "../../utilities/helper";

export default function PetSection(props) {
    // props
    const { authCtx } = props;

    // fetch pet information
    const { isLoading, error, data } = useQuery('pet', () => fetchPetsData(authCtx.token));

    if (isLoading)
        return <div>Loading ...</div>

    if (error)
        return <div>Normal Error</div>

    return (
        <div className="petSection">
            <div className="profile-pets">
                <div className="profile-pets-header flex items-center">
                    <div className="profile-pets-header-image">
                        <img
                            src="/assets/profile2.png"
                            height={100}
                            width={100}
                            alt="pet section header"
                        />
                    </div>

                    <div className="profile-pets-header-content mx-10">
                        <div className="profile-pets-header-content-heading text-2xl font-lighter">
                            Your Pets
                        </div>

                        <div className="profile-pets-header-content-newPet my-3">
                            <NewPet authCtx={authCtx} />
                        </div>
                    </div>
                </div>

                <div className="profile-pets-display-pets">
                    <PetsDisplay pets={data.data.data.pets} authCtx={authCtx} />
                </div>
            </div>

            <div className="profile-petsAdoption">
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
                            <AdoptPet pets={data.data.data.pets} authCtx={authCtx} />
                        </div>
                    </div>
                </div>

                <div className="profile-petsAdoption-display-pets">
                    <AdoptionPetsDisplay pets={data.data.data.pets} authCtx={authCtx} />
                </div>
            </div>
        </div>
    )
}