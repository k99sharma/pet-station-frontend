/* eslint-disable react/prop-types */
// importing components
import PetCard from "../PetCard/PetCard";

// adoption pets list component
export default function AdoptionPetsList(props) {
    // props
    const { petsList, filter } = props;

    return (
        <div className="adoptionPetsList my-10">
            {
                petsList.length === 0
                    ?
                    <div className="adoptionPetsList-empty p-5 bg-neutral-600 text-white rounded-md">
                        No available pets.
                    </div>
                    :
                    <div className="adoptionPetsList-display grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-5 bg-stone-200 rounded-md">
                        {
                            petsList.filter(pet => pet.category === filter).map(pet => <PetCard pet={pet} />)
                        }
                    </div>
            }
        </div>
    )
}