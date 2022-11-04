// importing components
import { useState } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import Modal from 'react-bootstrap/Modal'

// importing utilities
import { createNewPetRequest } from '../../utils/helper';

// create new pet component function 
function CreateNewPet(props) {
    // destructuring props
    const { userId, token, setIsModified } = props;

    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(!isOpen)
    }

    const handleRequestSent = (petData) => {
        // sent a create new pet request
        createNewPetRequest(petData, userId, token)
            .then((res) => {
                if (res.error) {
                    alert('Unable to create pet.');
                } else {
                    setIsModified(1)
                    alert('New pet created')
                }
            })
            .catch(err => {
                console.error(err);
                alert('Unable to sent request.');

            })
    }

    return (
        <div className="createNewPet my-2">
            <div className="createNewPet__button">
                <button onClick={handleModal} type="button">
                    New Pet
                </button>
            </div>

            <div className="createNewPet__modal">
                <Modal show={isOpen} onHide={handleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Pet</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Formik
                            initialValues={{
                                name: '',
                                breed: '',
                                category: '',
                                age: '',
                                weight: '',
                                ownerId: '',
                                gender: ''
                            }}

                            onSubmit={(values, actions) => {
                                handleRequestSent(values);
                                actions.setSubmitting(false)
                                setIsOpen(false)
                            }}
                        >
                            {
                                (({ isSubmitting }) => (
                                    <Form className="createNewPet__form">
                                        <div className="mb-1">
                                            <Field type="text" name="name" placeholder="Pet Name" required />
                                            <ErrorMessage name="name" component="div" />
                                        </div>

                                        <div className="mb-1">
                                            <Field type="text" name="breed" placeholder="Pet Breed" required />
                                            <ErrorMessage name="breed" component="div" />
                                        </div>

                                        <div className="mb-1">
                                            <Field type="text" name="category" placeholder="Pet Category" required />
                                            <ErrorMessage name="category" component="div" />
                                        </div>

                                        <div className="mb-1">
                                            <Field type="text" name="age" placeholder="Pet Age" required />
                                            <ErrorMessage name="age" component="div" />
                                        </div>

                                        <div className="mb-1">
                                            <Field type="text" name="weight" placeholder="Pet Weight" required />
                                            <ErrorMessage name="weight" component="div" />
                                        </div>

                                        <div className="mb-1">
                                            <div>
                                                Gender
                                            </div>
                                            <label htmlFor='gender'>
                                                <Field type="radio" name="gender" value="male" />
                                                Male
                                            </label>
                                            <label htmlFor='gender'>
                                                <Field type="radio" name="gender" value="female" />
                                                Female
                                            </label>
                                            <ErrorMessage name="gender" component="div" />
                                        </div>

                                        <button type="submit" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </Form>
                                ))
                            }
                        </Formik>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default CreateNewPet;