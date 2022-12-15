/* eslint-disable react/prop-types */
// importing components
import { useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

// importing helper function
import { fetchPetsForAdoptionData } from '../../utilities/helper';

// importing context
import AuthContext from '../../context/auth';
import AdoptionPetsList from '../AdoptionPetsList/AdoptionPetsList';

// filter component
function AdoptionFilter(props) {
    const { setFilter } = props;

    return (
        <div className="adoptionFilter">
            <FormControl fullWidth>
                <InputLabel>Filter</InputLabel>
                <Select
                    label="Filter"
                    defaultValue="dog"
                    onChange={e => setFilter(e.target.value)}
                >
                    <MenuItem value="cat">Cat</MenuItem>
                    <MenuItem value="dog">Dog</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

function AdoptionSection(props) {
    // props
    const { pets } = props;

    // state
    const [filter, setFilter] = useState('dog');

    return (
        <div className="adoptionSection">
            <div className="adoption-header flex items-center justify-around">
                <div className="adoption-header-banner flex items-center">
                    <div className="adoption-header-banner-img">
                        <img
                            src="/assets/adoption1.png"
                            height={60}
                            width={60}
                            alt="adoption header"
                        />
                    </div>

                    <div className="adoption-header-banner-title mx-5">
                        <div className="adoption-header-banner-content-title font-semibold text-xl">
                            Adoption
                        </div>

                        <div className="adoption-header-banner-content-subtitle">
                            Nice and Easy
                        </div>
                    </div>
                </div>

                <div className="adoption-header-filter w-24">
                    <AdoptionFilter setFilter={setFilter} />
                </div>
            </div>

            <div className="adoption-pets-list">
                <AdoptionPetsList
                    petsList={pets}
                    filter={filter}
                />
            </div>
        </div>
    )
}

// adoption component
export default function Adoption() {
    // context
    const authCtx = useContext(AuthContext);

    // fetch pet information
    const { isLoading, error, data } = useQuery('adoptionPet', () => fetchPetsForAdoptionData(authCtx.token));

    if (isLoading)
        return <div>Loading ...</div>

    if (error)
        return <div>Normal Error</div>


    return (
        <div className="adoption p-5">
            <AdoptionSection pets={data.data.pets} />
        </div>
    )
}