// importing css
import './Profile.css'

// importing components
import CreateNewPet from '../CreateNewPet/CreateNewPet';

// profile component
function Profile() {
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
            </div>
        </div>
    )
}

export default Profile;