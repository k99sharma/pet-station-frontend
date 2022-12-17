// importing components
import PetSection from "../PetSection/PetSection";
import AdoptionHistory from "../AdoptionHistory/AdoptionHistory";

import Heading from "../Heading/Heading";

// adoption component
export default function Profile(props) {
    const { authCtx } = props;

    return (
        <div className="profile box-container rounded-2xl md:w-4/5">
            <div className="profile-content">
                <div className="profile-header mb-5">
                    <Heading
                        sticker="/assets/profile1.png"
                        heading="Welcome Back!"
                        subheading="Where love and pets meet"
                    />
                </div>

                <div className="profile-petSection">
                    <PetSection token={authCtx.token} />
                </div>

                <div className="profile-adoptionHistory">
                    <AdoptionHistory token={authCtx.token} />
                </div>
            </div>
        </div>
    )
}