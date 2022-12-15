/* eslint-disable react/prop-types */
// adoption pets list
export default function AdoptionPetsList(props) {
    // props
    const { petsList } = props;

    return (
        <div className="adoptionPetsList">
            {
                console.log(petsList)
            }
        </div>
    )
}