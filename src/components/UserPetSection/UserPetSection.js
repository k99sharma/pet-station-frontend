/* eslint-disable react/prop-types */
// importing components
import NewPet from "../NewPet/NewPet";
import PetsDisplay from "../PetsDisplay/PetsDisplay";

export default function UserPetSection(props) {
    // props
    const { token, pets } = props;

    return (
        <div className="userPetSection">
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
                        <NewPet token={token} />
                    </div>
                </div>
            </div>

            <div className="profile-pets-display-pets">
                <PetsDisplay pets={pets} token={token} />
            </div>
        </div>
    )
}