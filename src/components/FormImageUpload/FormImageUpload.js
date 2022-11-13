// importing components
import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

// form image upload component
function FormImageUpload(_props) {
    const { setImageData } = _props;

    const [image, setImage] = useState(null);

    const handleUpload = () => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'ghost32');
        data.append('cloud_name', 'ghost32');

        fetch('https://api.cloudinary.com/v1_1/ghost32/upload', {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(result => {
                setImageData(result);
                setImage(null);
            })
            .catch(err => {
                console.error(err);
                alert('Error in upload!');
            })
    }

    return (
        <div className="formImageUpload mb-3">
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Select Image</Form.Label>
                <Form.Control onChange={e => setImage(e.target.files[0])} type="file" />
            </Form.Group>

            <Button variant="success" type="button" onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default FormImageUpload;