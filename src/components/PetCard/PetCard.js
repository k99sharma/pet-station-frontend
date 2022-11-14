// importing css
import './PetCard.css'

// importing components

// importing utilities
import { deletePet, titleCase } from "../../utils/helper";

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
        <div className="petCard mb-3 mx-md-2 col">
            <div className="petCard__thumbnail text-center my-2">
                <img
                    height={200}
                    width={200}
                    className="img-fluid rounded"
                    src={data.imageUrl}
                    alt={data.name}
                />
            </div>

            <div className="petCard__name h5 text-center mb-2">
                {
                    data.name
                }
            </div>

            <div className="petCard__options d-flex align-items-center justify-content-between px-2">
                <div className="petCard__options__breed">
                    {
                        titleCase(data.breed)
                    }
                </div>

                <button className="petCard__options__delete" type="button" onClick={handleDelete}>
                    <lord-icon
                        src="https://cdn.lordicon.com/kfzfxczd.json"
                        className="lordIcon"
                        trigger="hover"
                        colors="primary:#c71f16"
                    />
                </button>
            </div>

            <div className="petCard__attributes d-flex justify-content-around mb-2 p-1">
                <div className="petCard__attributes__sex p-2 mb-1">
                    <div className="pet__attributes__title">
                        {
                            `${titleCase(data.gender)}`
                        }
                    </div>

                    <div className="pet__attributes__value">
                        Sex
                    </div>
                </div>

                <div className="petCard__attributes__age p-2 mb-1 d-flex justify-content-center align-items-center flex-column">
                    <div className="pet__attributes__title">
                        {
                            `${data.age} Years`
                        }
                    </div>

                    <div className="pet__attributes__value">
                        Age
                    </div>
                </div>

                <div className="petCard__attributes__weight p-2 mb-1">
                    <div className="pet__attributes__title">
                        {
                            `${data.weight} Kg`
                        }
                    </div>

                    <div className="pet__attributes__value">
                        Weight
                    </div>
                </div>
            </div>

            <div className="petCard__description mb-2 p-2 rounded text-center">
                {
                    data.description
                }
            </div>
        </div>
    )
}

export default PetCard;