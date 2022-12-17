/* eslint-disable react/prop-types */
// importing components
import AdoptionPetsDisplay from "../AdoptionPetsDisplay/AdoptionPetsDisplay";
import AdoptPet from "../AdoptPet/AdoptPet";
import Heading from "../Heading/Heading";

export default function UserPetAdoptionSection(props) {
    // props
    const { token, pets } = props;

    return (
        <div className="userPetAdoptionSection">
            <div className="profile-petsAdoption-header">
                <Heading
                    sticker="/assets/profile3.png"
                    heading={`Your Pet's Adoption`}
                    subheading="Find a new family for your pets"
                >
                    <AdoptPet
                        pets={pets}
                        token={token}
                    />
                </Heading>
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