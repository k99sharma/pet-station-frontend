// importing components
import { useContext } from 'react'
import AdoptionPetList from '../AdoptionPetsList/AdoptionPetsList'

import AuthContext from '../../context/auth';

// adoption component
function Adoption() {
    const authCtx = useContext(AuthContext);

    return (
        <div className="adoption ">
            <div className="profile__header rounded py-2 px-5">
                <img
                    src="/assets/profile__header.svg"
                    width={150}
                    height={150}
                    alt="profile header"
                />
            </div>

            <div className="adoption__header d-flex align-items-center h3 my-5">
                <div className="adoption__header__illustration">
                    <lord-icon
                        className="lordIcon"
                        src="https://cdn.lordicon.com/svbmmyue.json"
                        trigger="hover"
                    />
                </div>

                <div className="adoption__header__title mx-3">
                    Adopt a Pet
                </div>
            </div>

            <div className="adoption__view">
                <AdoptionPetList token={authCtx.token} />
            </div>
        </div>
    )
}

export default Adoption;