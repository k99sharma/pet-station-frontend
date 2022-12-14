/* eslint-disable react/prop-types */
// importing components
import UserPetSection from "../UserPetSection/UserPetSection";
import UserPetAdoptionSection from "../UserPetAdoptionSection/UserPetAdoptionSection";

export default function PetSection(props) {
    // props
    const { token } = props;

    return (
        <div className="petSection">
            <div className="petSection-userPetSection">
                <UserPetSection
                    token={token}
                />
            </div>

            <div className="petSection-userPetAdoptionSection">
                <UserPetAdoptionSection
                    token={token}
                />
            </div>
        </div>
    )
}