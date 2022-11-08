// importing components
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useQuery } from 'react-query';

// importing utilities
import { fetchAllUserPets, addPetForAdoption } from '../../utils/helper';

// brick option component
function BrickOption(_props) {
    const { pet, token } = _props;

    const handleClick = async () => {
        const response = await addPetForAdoption(pet.petId, token);

        if (response.error) {
            alert('Unable to process request.')
        } else {
            alert('Pet added for adoption.')
        }
    }

    return (
        <div className="brickOption d-flex m-2 p-2 align-items-center justify-content-between">
            <div className="brickOption__label">
                {
                    pet.name
                }
            </div>

            <div className="brickOption__button">
                <button onClick={handleClick} type="button">
                    Add
                </button>
            </div>
        </div>
    )
}

// dashboard add pet for adoption button component
function DashboardAddPetForAdoptionButton(_props) {
    const { user, token } = _props;

    // modal states
    const [show, setShow] = useState(false)

    // handle close function of modal
    const handleClose = () => {
        setShow(false)
    }

    // fetching user pets
    const { isLoading, error, data } = useQuery('pet', () => {
        const response = fetchAllUserPets(user.userId, token);
        return response;
    })

    if (isLoading)
        return <div>...Loading</div>

    if (error)
        return <div>Error.</div>

    if (data.error)
        return <div>Error in data fetching.</div>

    return (
        <div className="addForAdoptionButton">
            <div className="addForAdoptionButton__button">
                <button type="button" onClick={() => setShow(true)}>
                    Add Pet
                </button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Add Pet
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {
                            data.data.length !== 0
                                ?
                                data.data.map(pet => pet.adoptionStatus === 'none'
                                    ?
                                    <BrickOption key={pet.petId} pet={pet} token={token} />
                                    :
                                    null
                                )
                                :
                                <div>No pet available.</div>
                        }
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default DashboardAddPetForAdoptionButton;