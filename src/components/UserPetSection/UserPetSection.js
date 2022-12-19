/* eslint-disable react/prop-types */
// importing components
import NewPet from "../NewPet/NewPet";
import PetsDisplay from "../PetsDisplay/PetsDisplay";

import Heading from '../Heading/Heading';

// importing helper function 

export default function UserPetSection(props) {
    // props
    const { token, pets } = props;

    return (
        <div className="userPetSection">
            <div className="profile-pets-header flex items-center">
                <Heading
                    sticker="/assets/profile2.png"
                    heading="Your Pets"
                    subheading="Checkout your pets below"
                >
                    <NewPet />
                </Heading>
            </div>

            <div className="profile-pets-display-pets">
                <PetsDisplay
                    pets={pets}
                    token={token}
                />
            </div>
        </div>
    )
}
