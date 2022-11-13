// importing utilities
import { deletePet } from "../../utils/helper";

// pet card component
function PetCard(_props) {
    const { data, token } = _props;

    const handleDelete = async () => {
        const response = await deletePet(data.petId, token);

        if (response.error) {
            alert('Unable to delete pet.')
        } else {
            alert('Pet is deleted.')
        }
    }

    return (
        <div className="petCard">
            <div className="petCard__image">
                <img
                    width={200}
                    height={200}
                    src={data.imageUrl}
                    alt={data.name}
                />
            </div>

            <div className="petCard__delete">
                <button type="button" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default PetCard;