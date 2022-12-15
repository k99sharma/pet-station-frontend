/* eslint-disable react/prop-types */
// importing components
import AdoptionPetsDisplay from "../AdoptionPetsDisplay/AdoptionPetsDisplay";
import AdoptPet from "../AdoptPet/AdoptPet";

export default function UserPetAdoptionSection(props) {
    // props
    const { token, pets } = props;

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
                            pets={pets}
                            token={token}
                        />
                    </div>
                </div>
            </div>

            <div className="profile-petsAdoption-display-pets">
                <AdoptionPetsDisplay
                    pets={pets}
                    token={token}
                />
            </div>
        </div>
    )
}