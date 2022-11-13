// importing css
import './CreateNewPet.css'

// importing components
import { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormImageUpload from '../FormImageUpload/FormImageUpload';

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
    const [picture, setPicture] = useState('')
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

        console.log(picture)

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
                className="createNewButton px-4 py-2"
                type="button">
                New Pet
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        New Pet
                    </Modal.Title>
                </Modal.Header>

                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                onChange={e => setName(e.target.value)}
                                type="text"
                                placeholder="Name"
                            />
                        </Form.Group>

                        <FormImageUpload setImageData={setPicture} />

                        <Form.Group className="mb-3" controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Select onChange={e => setCategory(e.target.value)}>
                                <option value="">Select Category</option>
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="breed">
                            <Form.Label>Breed</Form.Label>
                            <Form.Select disabled={category === ""} onChange={e => setBreed(e.target.value)}>
                                <option value="">Select Breed</option>
                                {
                                    category === "dog"
                                        ?
                                        dogBreed.map(dog => <option key={dog} value={dog}>{dog}</option>)
                                        :
                                        catBreed.map(cat => <option key={cat} value={cat}>{cat}</option>)
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                onChange={e => setAge(e.target.value)}
                                type="number"
                                placeholder="Age"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="weight">
                            <Form.Label>Weight (in kgs)</Form.Label>
                            <Form.Control
                                onChange={e => setWeight(e.target.value)}
                                type="number"
                                placeholder="Weight"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select onChange={e => setGender(e.target.value)}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select>
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="success" type="submit">
                            Create
                        </Button>

                        <Button variant="danger" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default CreateNewPet;