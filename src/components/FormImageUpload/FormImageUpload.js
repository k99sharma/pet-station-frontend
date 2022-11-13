// importing components
import { useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

// form image upload component
function FormImageUpload(_props) {
    const { setImageData } = _props;

    const [image, setImage] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setIsActive(false);
    }, [])

    const handleUpload = () => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'ghost32');
        data.append('cloud_name', 'ghost32');

        setIsSubmitting(true) // image is uploading

        fetch('https://api.cloudinary.com/v1_1/ghost32/upload', {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(result => {
                setImageData(result)
                setIsActive(true)
                setIsSubmitting(false) // reset
                alert('Image is uploaded.')
            })
            .catch(err => {
                console.error(err)
                setIsSubmitting(false) // reset
                alert('Error in upload!')
            })
    }

    return (
        <div className="formImageUpload mb-3">
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Select Image</Form.Label>
                <Form.Control onChange={e => setImage(e.target.files[0])} type="file" />
            </Form.Group>

            <Button disabled={isActive || isSubmitting} variant="primary" type="button" onClick={handleUpload}>
                {
                    !isSubmitting
                        ?
                        <>Upload</>
                        :
                        <Spinner animation="border" size="sm" />
                }
            </Button>
        </div>
    )
}

export default FormImageUpload;