// pet card component
function PetCard(_props) {
    const { data } = _props;

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
        </div>
    )
}

export default PetCard;