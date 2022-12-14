/* eslint-disable react/prop-types */
// importing components
import NewPet from "../NewPet/NewPet";
import PetsDisplay from "../PetsDisplay/PetsDisplay";

// adoption component
export default function Profile(props) {
    const { authCtx } = props;

    return (
        <div className="profile p-5">
            <div className="profile-header flex items-center mb-5">
                <div className="profile-header-image">
                    <img
                        src="/assets/profile1.png"
                        height={100}
                        width={100}
                        alt="header"
                    />
                </div>

                <div className="profile-header-content text-2xl mx-10 font-lighter">
                    Welcome Back!
                </div>
            </div>

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
                    <PetsDisplay authCtx={authCtx} />
                </div>
            </div>
        </div>
    )
}