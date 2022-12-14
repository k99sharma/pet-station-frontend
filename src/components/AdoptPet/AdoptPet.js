/* eslint-disable react/prop-types */
// importing components
import { useState } from 'react';
import { Modal, Box, Divider } from '@mui/material';
import { GrClose } from "react-icons/gr";

// importing helper function
import { putPetOnAdoption } from '../../utilities/helper';

// adopt pet form component
function AdoptPetForm(props) {
    // token
    const { pets, token, handleClose } = props;

    // put pet for adoption
    const handlePutOnAdopt = async (petId) => {
        const res = await putPetOnAdoption(petId, token);

        if (res.status === 'fail' || res.status === 'error') {
            console.log(res);
            alert('Pet cannot be put on adoption.');
        }

        else {
            alert('Pet is put for adoption.');
            handleClose();
        }
    }

    return (
        <div className="adoptPetForm">
            <div className="adoptPetForm-header flex items-center justify-around">
                <div className="adoptPetForm-header-title text-xl font-bold">
                    Available Pets
                </div>

                <button type="button" onClick={handleClose} className="adoptPetForm-header-close">
                    <GrClose />
                </button>
            </div>

            <div className="my-3">
                <Divider />
            </div>

            <div className="adoptPetForm-header-options">
                {
                    pets.filter(pet => pet.adoptionStatus === 'none').map(pet =>
                        <div key={pet.petId} className="adoptPetForm-option flex items-center justify-around mb-2">
                            <div className="adoptPetForm-option font-bold text-lg flex items-center">
                                <div className="adoptPetForm-option-img">
                                    <img
                                        className="rounded-full"
                                        src={pet.imageUrl}
                                        width={50}
                                        height={50}
                                        alt={pet.name}
                                    />
                                </div>

                                <div className="adoptPetForm-option-name mx-2">
                                    {
                                        pet.name
                                    }
                                </div>
                            </div>

                            <div className="adoptPetForm-option-button">
                                <button
                                    onClick={() => handlePutOnAdopt(pet.petId)}
                                    className="bg-green-600 text-white px-4 py-1 rounded-md"
                                    type="button"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

// style
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
};

export default function AdoptPet(props) {
    // props
    const { pets, token } = props;

    // states
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="adoptPet">
            <button
                onClick={() => { setOpen(true); }}
                className="adoptPet-button font-light py-2 px-4 bg-gradient-to-b from-orange-400 to-orange-700 text-white rounded-md"
                type="button"
            >
                Put For Adoption
            </button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="new pet button"
                aria-describedby="new pet form"
            >
                <Box
                    className='rounded-lg'
                    sx={style}
                >
                    <AdoptPetForm
                        pets={pets}
                        token={token}
                        handleClose={handleClose}
                    />
                </Box>
            </Modal>
        </div>
    )
}