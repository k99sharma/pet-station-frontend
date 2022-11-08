// importing components
import { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

// importing context
import AuthContext from '../../context/auth';

// importing breeds
import { catBreed, dogBreed } from '../../utils/breed';

// importing utilities
import { createNewPet } from '../../utils/helper';

// create new pet component
function CreateNewPet() {
    const authCtx = useContext(AuthContext);

    const [show, setShow] = useState(false);

    // form states
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [breed, setBreed] = useState('')
    const [age, setAge] = useState(0)
    const [weight, setWeight] = useState(0)
    const [gender, setGender] = useState('')

    const handleClose = () => {
        setShow(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();     // prevent default behavior

        setShow(false);     // set modal show state

        const payload = {
            name,
            breed,
            category,
            age: String(age),
            weight: String(weight),
            ownerId: authCtx.user.userId,
            gender
        }

        const response = await createNewPet(payload, authCtx.token)

        if (response.error) {
            alert('Unable to create new pet.')
        } else {
            alert('New pet is created.')
        }
    }

    return (
        <>
            <button
                onClick={() => {
                    setShow(true);
                }}

                type="button">
                Create
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Create New Pet
                    </Modal.Title>
                </Modal.Header>

                <form autoComplete="off" onSubmit={handleSubmit}>
                    <Modal.Body>
                        <div className="mb-2">
                            <input type="text" onChange={e => setName(e.target.value)} placeholder="Name" required />
                        </div>

                        <div className="mb-2">
                            <select onChange={e => setCategory(e.target.value)}>
                                <option value="">Category</option>
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                            </select>
                        </div>

                        <div className="mb-2">
                            <select disabled={category === ""} onChange={e => setBreed(e.target.value)}>
                                <option value="">Breed</option>
                                {
                                    category === "dog"
                                        ?
                                        dogBreed.map(dog => <option key={dog} value={dog}>{dog}</option>)
                                        :
                                        catBreed.map(cat => <option key={cat} value={cat}>{cat}</option>)
                                }
                            </select>
                        </div>

                        <div className="mb-2">
                            <input type="number" onChange={e => setAge(e.target.value)} placeholder="Age" required />
                        </div>


                        <div className="mb-2">
                            <input type="number" onChange={e => setWeight(e.target.value)} placeholder="Weight" required />
                        </div>


                        <div className="mb-2">
                            <select onChange={e => setGender(e.target.value)}>
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>


                    </Modal.Body>

                    <Modal.Footer>
                        <div className="mb-2">
                            <button type="submit">
                                Submit
                            </button>
                        </div>
                    </Modal.Footer>
                </form>

            </Modal>
        </>
    )
}

export default CreateNewPet;