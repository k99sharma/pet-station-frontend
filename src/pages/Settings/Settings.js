// importing components
import { useState } from "react";

import ImageUpload from "../../components/ImageUpload/ImageUpload";

// settings component
function Settings() {
    const [imageData, setImageData] = useState(null);
    return (
        <div className="settings container">
            <div className="settings__header h1">
                Settings
            </div>

            <div className="settings__profilePictureUpload my-5">
                <div className="h6 mb-2">
                    Profile Picture
                </div>

                {
                    imageData !== null
                        ?
                        <div className="preview">
                            <img src={imageData.url} alt="preview" />
                        </div>
                        :
                        null
                }

                <ImageUpload setImageData={setImageData} />
            </div>
        </div>
    )
}

export default Settings;