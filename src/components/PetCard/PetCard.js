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
        <div className="petCard border border-dark d-inline-flex flex-column p-1 mx-2">
            <div className="petCard__name">
                {
                    data.name
                }
            </div>

            <div className="petCard__category">
                {
                    data.category
                }
            </div>

            <div className="petCard__breed">
                {
                    data.breed
                }
            </div>

            <div className="petCard__breed">
                {
                    data.age
                }
            </div>

            <div className="petCard__breed">
                {
                    data.weight
                }
            </div>

            <div className="petCard__breed">
                {
                    data.gender
                }
            </div>

            <div className="petCard__deleteButton mt-2">
                <button type="button" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default PetCard;