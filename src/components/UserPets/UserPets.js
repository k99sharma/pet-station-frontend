// importing components
import { useState, useEffect } from 'react';
import CreateNewPet from '../CreateNewPet/CreateNewPet';

// importing utilities
import { getPetData } from '../../utils/helper';


// user pets components
function UserPets(props) {
    const { userId, token } = props;

    const [pets, setPets] = useState([]);

    useEffect(() => {
        function fetchUserPets() {
            return getPetData(userId, token)
        }

        fetchUserPets()
            .then(res => {
                console.log(res)
                setPets(res.data);
            })
            .catch(err => {
                console.log(err);
                alert('Unable to fetch pets data');
            })
    }, [])

    return (
        <div className="userPets mt-5">
            <div className="userPets__title h3">
                Pets
            </div>

            <div className="userPets__newPetButton">
                <CreateNewPet />
            </div>

            <div className="userPets__pets">
                {
                    pets.length !== 0
                        ?
                        pets.map(pet => (
                            <div key={pet.petId} className="pet">
                                console.log(pet)
                            </div>
                        ))
                        :
                        <div>
                            No pets found
                        </div>
                }
            </div>
        </div>
    )
}

export default UserPets;