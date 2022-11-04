// importing components
import { useState, useEffect } from 'react';

// importing utilities
import { getPetData, deletePet } from '../../utils/helper';

// pet showcase component
function PetShowcase(props) {
    const { userId, token, isPetModified, handleModification } = props;
    const [pets, setPets] = useState([]);

    useEffect(() => {
        function fetchUserPets() {
            return getPetData(userId, token)
        }

        fetchUserPets()
            .then(res => {
                setPets(res.data);
            })
            .catch(err => {
                console.log(err);
                alert('Unable to fetch pets data');
            })
    }, [isPetModified])

    const handleDelete = (petId) => {
        deletePet(token, petId)
            .then(res => {
                if (res.error) {
                    alert('Unable to delete pet.')
                } else {
                    alert('Pet is deleted')
                    handleModification()
                }
            })
            .catch(err => {
                console.error(err)
                alert('Unable to send request.')
            })
    }

    return (
        <div className="petShowcase">
            <div className="petShowcase__title h5">
                User Pets
            </div>
            <div className="petShowcase__gallery d-flex">
                {
                    pets.map(pet => (
                        <div key={pet.petId}>
                            <ul>
                                <li>
                                    {
                                        `Pet name: ${pet.name}`
                                    }
                                </li>

                                <li>
                                    {
                                        `Pet breed: ${pet.breed}`
                                    }
                                </li>

                                <li>
                                    {
                                        `Pet category: ${pet.category}`
                                    }
                                </li>

                                <li>
                                    {
                                        `Pet age: ${pet.age}`
                                    }
                                </li>

                                <li>
                                    {
                                        `Pet weight: ${pet.weight}`
                                    }
                                </li>

                                <li>
                                    {
                                        `Pet gender: ${pet.gender}`
                                    }
                                </li>
                            </ul>

                            <div className="petShowcase__gallery__delete">
                                <button onClick={() => handleDelete(pet.petId)} type="button">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PetShowcase;