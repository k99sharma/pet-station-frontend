/* eslint-disable react/prop-types */
// importing components
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";

// importing helper functions
import { deletePet } from "../../utilities/helper";

function PetCard(props) {
    const { pet, token } = props;

    // state
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleDelete = async () => {
        setIsSubmitting(true);
        const res = await deletePet(pet.petId, token);

        if (res.status === 'fail' || res.status === 'error') {
            console.log(res);
            alert('Pet cannot be deleted.');
        }

        else {
            alert('Pet deleted.');
        }

        setIsSubmitting(false);
    }

    return (
        <div className="petCard flex bg-white p-2 rounded-md items-center shadow-2xl m-3">
            <div className="petCard-image w-2/5">
                <img
                    className="rounded-full"
                    src={pet.imageUrl}
                    alt={pet.name}
                />
            </div>

            <div className="petCard-content w-3/5 ml-3 p-2">
                <div className="petCard-content-header flex justify-around items-center">
                    <div className="petCard-content-name font-bold text-lg">
                        {
                            pet.name
                        }
                    </div>

                    {
                        pet.adoptionStatus === 'none'
                            ?
                            <div className="petCard-content-delete">
                                {
                                    isSubmitting
                                        ?
                                        <CircularProgress />
                                        :
                                        <button type="button">
                                            <MdDelete
                                                onClick={handleDelete}
                                            />
                                        </button>
                                }
                            </div>
                            :
                            null
                    }
                </div>

                <div className="pet-content-breed text-sm text-center my-3 bg-slate-800 rounded-md p-1 text-white">
                    {
                        pet.breed
                    }
                </div>

                <div className="pet-content-attributes flex items-center justify-around">
                    <div className="pet-content-attributes-weight flex flex-col items-center bg-red-200 p-2 rounded-md shadow-md w-15">
                        <div className="pet-content-attributes-weight-value font-lighter">
                            {
                                `${pet.weight} kg`
                            }
                        </div>

                        <div className="pet-content-attributes-weight-label">
                            Weight
                        </div>
                    </div>

                    <div className="pet-content-attributes-age">
                        <div className="pet-content-attributes-age flex flex-col items-center bg-blue-200 p-2 rounded-md shadow-md w-16">
                            <div className="pet-content-attributes-age-value ">
                                {
                                    `${pet.age} yr`
                                }
                            </div>

                            <div className="pet-content-attributes-age-label">
                                Age
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function PetsDisplay(props) {
    // props
    const { pets, token } = props;

    return (
        <div className="petsDisplay my-10 rounded-md bg-neutral-300 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {
                pets.length !== 0
                    ?
                    pets.map(pet => (
                        <PetCard key={pet.petId} token={token} pet={pet} />
                    ))
                    :
                    <div className="petDisplay-empty p-3 font-bold text-neutral-800">
                        No pets available.
                    </div>
            }
        </div>
    )
}