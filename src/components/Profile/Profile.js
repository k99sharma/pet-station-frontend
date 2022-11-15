// importing css
import './Profile.css'

// importing components
import { useContext } from 'react';
import CreateNewPet from '../CreateNewPet/CreateNewPet';
import UserPetShow from '../UserPetShow/UserPetShow';
import UserPetForAdoption from '../UserPetForAdoption/UserPetForAdoption';
import UserPetAdoption from '../UserPetAdoption/UserPetAdoption';
import AuthFooter from '../AuthFooter/AuthFooter';
import AuthContext from '../../context/auth';


// profile component
function Profile() {
    const authCtx = useContext(AuthContext);

    return (
        <div className="profile">
            <div className="profile__header rounded py-2 px-5">
                <img
                    src="/assets/profile__header.svg"
                    width={150}
                    height={150}
                    alt="profile header"
                />
            </div>

            <div className="profile__pets my-5">
                <div className="profile__pets__title h3 d-flex align-items-center">
                    <div>
                        <lord-icon
                            className="lordIcon"
                            src="https://cdn.lordicon.com/ynwbvguu.json"
                            trigger="hover"
                        />
                    </div>

                    <div className="mx-2">
                        Your Pets
                    </div>
                </div>

                <div className="profile__pets__new my-4">
                    <CreateNewPet />
                </div>

                <div className="profile__pets__show my-4">
                    <UserPetShow />
                </div>
            </div>

            <div className="profile__adoption__new my-5">
                <div className="profile__adoption__title h3 d-flex align-items-center">
                    <div>
                        <lord-icon
                            className="lordIcon"
                            src="https://cdn.lordicon.com/qeberlkz.json"
                            trigger="hover"
                        />
                    </div>

                    <div className="mx-2">
                        Adoption
                    </div>
                </div>

                <div className="profile__adoption__button my-4">
                    <UserPetForAdoption token={authCtx.token} />
                </div>

                <div className="profile__pets__show my-4">
                    <UserPetAdoption user={authCtx.user} token={authCtx.token} />
                </div>
            </div>

            <div className="mt-5 text-center">
                <AuthFooter />
            </div>
        </div>
    )
}

export default Profile;