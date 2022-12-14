/* eslint-disable react/prop-types */
// importing components
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { MdDelete } from "react-icons/md";

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// importing helper functions
import { fetchPetsData, removePetFromAdoption } from "../../utilities/helper";

function PetCard(props) {
    const { pet, token } = props;

    // function to handle adoption removal
    const handleRemoveFromAdoption = async () => {
        const res = await removePetFromAdoption(pet.petId, token);

        console.log(res);

        if (res.status === 'fail' || res.status === 'error') {
            console.log(res);
            alert('Pet cannot be removed from adoption.');
        }

        else {
            alert('Pet removed from adoption.');
        }
    }

    // function to complete adoption 
    const handleCompleteAdoption = async () => {
        console.log('Complete')
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

                    <div className="petCard-content-delete">
                        <button type="button">
                            <MdDelete
                                onClick={handleRemoveFromAdoption}
                            />
                        </button>
                    </div>
                </div>

                <div className="pet-content-breed text-sm text-center my-3 bg-slate-800 rounded-md p-1 text-white">
                    {
                        pet.breed
                    }
                </div>

                <div className="pet-content-complete">
                    <FormControl fullWidth>
                        <InputLabel id="complete">Complete</InputLabel>
                        <Select
                            disabled={pet.adoptionRequest.length === 0}
                            labelId="complete"
                            id="complete"
                            label="Complete"
                            onChange={handleCompleteAdoption}
                        >
                            {
                                pet.adoptionRequest.map(data =>
                                    <MenuItem value={data.userId}>
                                        {
                                            `${data.firstName} ${data.lastName}`
                                        }
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default function AdoptionPetsDisplay(props) {
    // props
    const { token } = props;

    // state
    const [pets, setPets] = useState([]);

    // fetch pet information
    const { isLoading, error, data } = useQuery('pet', () => fetchPetsData(token));

    if (isLoading)
        return <div>Loading ...</div>

    if (error)
        return <div>Normal Error</div>

    useEffect(() => {
        const arr = [];

        // eslint-disable-next-line no-restricted-syntax
        for (const pet of data.data.data.pets) {
            if (pet.adoptionStatus === 'pending')
                arr.push(pet);
        }

        setPets(arr);
    }, [])

    return (
        <div className="petsDisplay my-10 rounded-md bg-neutral-300 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {
                pets.length !== 0
                    ?
                    pets.filter(pet => pet.adoptionStatus === 'pending').map(pet => (
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