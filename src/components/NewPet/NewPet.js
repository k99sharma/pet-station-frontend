/* eslint-disable react/prop-types */
// importing css
import './NewPet.css';

// importing components
import { useState } from 'react';

import { GrClose } from "react-icons/gr";
import { Modal, Box, Divider, TextField, FormControl, InputLabel, Select, MenuItem, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import FileUpload from '../FileUpload/FileUpload';

// importing form helper
import { dogBreed, catBreed } from '../../utilities/formHelper';

// importing helper function
import { createNewPetHelper } from '../../utilities/helper';

// validation schema
const validationSchema = Yup.object().shape({
    name: Yup
        .string('Enter pet name')
        .required('Pet name is required'),
    description: Yup
        .string('Describe your pet')
        .required('Description is required'),
    category: Yup
        .string('Enter your pet category')
        .required('Pet category is required'),
    breed: Yup
        .string('Enter your pet breed')
        .required('Pet breed required'),
    age: Yup
        .number('Enter your pet age')
        .min(1, 'Minimum age is 1')
        .max(30, 'Maximum age is 30')
        .required('Pet age is required'),
    weight: Yup
        .number('Enter your pet weight')
        .min(5, 'Minimum weight is 5 kg')
        .max(50, 'Maximum weight is 50 kg')
        .required('Pet weight is required')
});

// new pet form component
function NewPetForm(props) {
    const { handleClose, token } = props;

    // state
    const [imageUrl, setImageUrl] = useState(null);

    // function to handle submit
    const handleSubmit = async (values) => {
        const payload = {
            ...values,
            imageUrl
        };

        const res = await createNewPetHelper(payload, token);

        if (res.error) {
            alert('Pet cannot be created.');
        } else {
            alert(res.data);
            handleClose(false);
        }
    }

    // formik 
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            category: '',
            breed: '',
            age: '',
            weight: ''
        },
        validationSchema,
        onSubmit: handleSubmit
    })

    return (
        <div className="newPetForm">
            <div className="newPetForm-header flex items-center justify-around my-2">
                <div className="adoptPetForm-header-title text-xl font-bold">
                    New Pet
                </div>

                <button type="button" onClick={handleClose} className="adoptPetForm-header-close">
                    <GrClose />
                </button>
            </div>

            <div className="my-2">
                <Divider />
            </div>

            <div className="newPetForm-form">
                <FormControl>
                    <div className="newPetForm-form-inputField mb-3">
                        <TextField
                            fullWidth
                            id="name"
                            label="Name"
                            type="text"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                    </div>

                    <div className="newPetForm-form-inputField mb-3">
                        <TextField
                            fullWidth
                            id="description"
                            label="Description"
                            type="text"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                    </div>

                    <div className="newPetForm-form-inputField mb-3">
                        <FileUpload label="Upload Image" setFile={setImageUrl} />
                    </div>

                    <div className="newPetForm-form-inputField mb-3">
                        <FormControl fullWidth>
                            <InputLabel id="category">Category</InputLabel>
                            <Select
                                labelId="category"
                                id="category"
                                value={formik.values.category}
                                label="Category"
                                name="category"
                                onChange={formik.handleChange}
                                error={formik.touched.category && Boolean(formik.errors.category)}
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="dog">Dog</MenuItem>
                                <MenuItem value="cat">Cat</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="newPetForm-form-inputField mb-3">
                        <FormControl fullWidth>
                            <InputLabel id="breed">Breed</InputLabel>
                            <Select
                                disabled={formik.values.category === ''}
                                labelId="breed"
                                id="breed"
                                value={formik.values.breed}
                                label="Breed"
                                name="breed"
                                onChange={formik.handleChange}
                                error={formik.touched.breed && Boolean(formik.errors.breed)}
                            >
                                {
                                    formik.values.category === 'cat'
                                        ?
                                        catBreed.map(cat => <MenuItem key={cat.id} value={cat.label}>{cat.label}</MenuItem>)
                                        :
                                        dogBreed.map(dog => <MenuItem key={dog.id} value={dog.label}>{dog.label}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </div>

                    <div className="newPetForm-form-inputField mb-3">
                        <TextField
                            fullWidth
                            id="age"
                            label="Age"
                            type="number"
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            error={formik.touched.age && Boolean(formik.errors.age)}
                            helperText={formik.touched.age && formik.errors.age}
                        />
                    </div>

                    <div className="newPetForm-form-inputField mb-3">
                        <TextField
                            fullWidth
                            id="weight"
                            label="Weight"
                            type="number"
                            value={formik.values.weight}
                            onChange={formik.handleChange}
                            error={formik.touched.weight && Boolean(formik.errors.weight)}
                            helperText={formik.touched.weight && formik.errors.weight}
                        />
                    </div>

                    <div className="newPetForm-form mt-5">
                        {
                            !formik.isSubmitting
                                ?
                                <button
                                    disabled={imageUrl === null}
                                    className="bg-gradient-to-b from-green-400 to-green-600 p-2 rounded-md text-white hover:shadow-xl"
                                    onClick={formik.handleSubmit}
                                    type="submit"
                                >
                                    Submit
                                </button>
                                :
                                <CircularProgress />
                        }
                        <button
                            className="bg-gradient-to-b from-red-400 to-red-600 p-2 rounded-md text-white hover:shadow-xl mx-3"
                            onClick={handleClose}
                            type="button"
                        >
                            Close
                        </button>
                    </div>
                </FormControl>
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

// New Pet button component
export default function NewPet(props) {
    // props
    const { token } = props;

    // states
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="newPet">
            <button onClick={() => { setOpen(true); }} className="newPet-button p-2" type="button">
                New Pet
            </button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="new pet button"
                aria-describedby="new pet form"
            >
                <Box className='rounded-lg' sx={style}>
                    <NewPetForm token={token} handleClose={handleClose} />
                </Box>
            </Modal>
        </div>


    )
}