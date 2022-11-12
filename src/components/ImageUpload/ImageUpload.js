// importing components
import { useState } from 'react'

// image upload component
function ImageUpload(_props) {
    const { setImageData } = _props;

    const [image, setImage] = useState(null);
    const [clearInput, setClearInput] = useState(false);

    const handleChange = (e) => {
        setImage(e.target.files[0]);
        setClearInput(false);
    }

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
                setClearInput(true);
                setImage(null);
            })
            .catch(err => {
                console.error(err);
                alert('Error in upload!');
            })
    }

    const handleCancel = () => {
        setClearInput(true);
        setImageData(null);
        setImage(null);
    }

    return (
        <div className="imageUpload">
            <div className="imageUpload__input">
                <input type="file" key={clearInput} name="image" onChange={handleChange} />
            </div>

            {
                image !== null
                    ?
                    <div className="imageUpload__actions">
                        <div className="imageUpload__actions__upload">
                            <button type="button" onClick={handleUpload}>
                                Upload
                            </button>
                        </div>

                        <div className="imageUpload__actions__cancel">
                            <button onClick={handleCancel} type="button">
                                Cancel
                            </button>
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default ImageUpload;