// importing components
import { useState, lazy, Suspense } from 'react';

import Spinner from 'react-bootstrap/Spinner';
import CreateNewPet from '../CreateNewPet/CreateNewPet';

// user pets components
function UserPets(props) {
    const { userId, token } = props;

    const [isPetModified, setIsPetModified] = useState(0);

    const handleModification = () => {
        setIsPetModified(isPetModified + 1)
    }

    // lazy loading
    const PetShowcase = lazy(() => import('../PetShowcase/PetShowcase'))

    return (
        <div className="userPets mt-5">
            <div className="userPets__title h3">
                Pets
            </div>

            <div className="userPets__newPetButton">
                <CreateNewPet userId={userId} token={token} handleModification={handleModification} />
            </div>

            <div className="userPets__pets my-4">
                <Suspense
                    fallback={
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>}
                >
                    <PetShowcase userId={userId} token={token} isPetModified={isPetModified} handleModification={handleModification} />
                </Suspense>

            </div>
        </div>
    )
}

export default UserPets;