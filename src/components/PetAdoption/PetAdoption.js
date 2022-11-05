// importing components
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// importing utilities
import { fetchPetsForAdoption } from '../../utils/helper';

// pet adoption component
function PetAdoption(props) {
    const { userId, token } = props;
    const [pets, setPets] = useState([])

    useEffect(() => {
        fetchPetsForAdoption(userId, token)
            .then(res => {
                if (res.error) {
                    alert('Unable to fetch pets')
                } else {
                    console.log(res);
                    setPets(res.data);
                }
            })
            .catch(err => {
                console.error(err)
                alert('Unable to send a request.')
            })
    }, [])

    return (
        <div className="petAdoption">
            <div className="petAdoption__title h5">
                Pet Adoption
            </div>

            <div className="petAdoption__seeAdoptionList">
                <button type="button">
                    <Link to="/adoptionList">
                        Adoption List
                    </Link>
                </button>
            </div>

            <div className="petAdoption__petsForAdoption">
                {
                    console.log(pets)
                }
            </div>
        </div>
    )
}

export default PetAdoption;