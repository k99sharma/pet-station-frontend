/* eslint-disable react/prop-types */
// importing components
import PetSection from "../PetSection/PetSection";

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

            <div className="profile-petSection">
                <PetSection authCtx={authCtx} />
            </div>
        </div>
    )
}