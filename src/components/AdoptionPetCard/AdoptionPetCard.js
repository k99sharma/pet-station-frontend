// importing css
import './AdoptionPetCard.css'

// importing components
import { useQuery } from 'react-query';

// importing utilities
import { Spinner } from 'react-bootstrap';
import { titleCase, fetchUserData } from "../../utils/helper";

// pet card component
function AdoptionPetCard(_props) {
    const { pet, token } = _props;

    const { error, isLoading, data } = useQuery('user', () => {
        const response = fetchUserData(pet.ownerId, token);
        return response;
    })

    if (isLoading)
        return <Spinner />

    if (error)
        return <div>Error</div>

    if (data.error)
        return <div>Error MEssages</div>

    return (
        <div className="adoptionPetCard mb-3 mx-md-2 col">
            <div className="adoptionPetCard__thumbnail text-center my-2">
                <img
                    height={200}
                    width={200}
                    className="img-fluid rounded"
                    src={pet.imageUrl}
                    alt={pet.name}
                />
            </div>

            <div className="adoptionPetCard__name h5 text-center mb-2">
                {
                    pet.name
                }
            </div>

            <div className="adoptionPetCard__options d-flex align-items-center justify-content-between px-2">
                <div className="adoptionPetCard__options__breed">
                    {
                        titleCase(pet.breed)
                    }
                </div>
            </div>

            <div className="adoptionPetCard__attributes d-flex justify-content-around mb-2 p-1">
                <div className="adoptionPetCard__attributes__sex p-2 mb-1">
                    <div className="pet__attributes__title">
                        {
                            `${titleCase(pet.gender)}`
                        }
                    </div>

                    <div className="pet__attributes__value">
                        Sex
                    </div>
                </div>

                <div className="petCard__attributes__age p-2 mb-1 d-flex justify-content-center align-items-center flex-column">
                    <div className="pet__attributes__title">
                        {
                            `${pet.age} Years`
                        }
                    </div>

                    <div className="pet__attributes__value">
                        Age
                    </div>
                </div>

                <div className="adoptionPetCard__attributes__weight p-2 mb-1">
                    <div className="pet__attributes__title">
                        {
                            `${pet.weight} Kg`
                        }
                    </div>

                    <div className="pet__attributes__value">
                        Weight
                    </div>
                </div>
            </div>

            <div className="adoptionPetCard__description mb-2 p-2 rounded text-center">
                {
                    pet.description
                }
            </div>

            <div className="adoptionPetCard__ownerDetails mb-2 p-2">
                {
                    `Owner Id: ${data.data.firstName}`
                }
            </div>
        </div>
    )
}

export default AdoptionPetCard;