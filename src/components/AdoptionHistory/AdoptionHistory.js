/* eslint-disable react/prop-types */
// importing components
import { useEffect, useState } from "react";
import { useQuery } from "react-query"

// importing helper functions
import { fetchAdoptionHistory } from "../../utilities/helper";
import Heading from "../Heading/Heading";
import Empty from "../Empty/Empty";

function Contract(props) {
    const { contract } = props;

    return (
        <div className="contract flex p-2 bg-white rounded-lg items-center">
            <div className="contract-image w-2/5">
                <img
                    src={contract.pet.imageUrl}
                    className="rounded-full"
                    width={100}
                    height={100}
                    alt="pet"
                />
            </div>

            <div className="contract-content w-3/5">
                <div className="contract-content-label text-xl mb-2">
                    {
                        contract.pet.name
                    }
                </div>

                <div className="contract-content-owner">
                    {
                        `Owner: ${contract.adoptedBy.firstName} ${contract.adoptedBy.lastName}`
                    }
                </div>
            </div>
        </div>
    )
}

function AdoptionCard(props) {
    const { data } = props;

    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        async function parseHelper() {
            let c = data.data.map(d => {
                let contractData = d.contract;
                contractData = JSON.parse(contractData);
                return contractData;
            });

            c = await Promise.all(c);

            setContracts(c);
        }

        parseHelper();
    }, [])

    return (
        <div className="adoptionCard">
            {
                contracts.length === 0
                    ?
                    <div className="adoptionCard-contract-empty">
                        <Empty
                            image="/assets/empty4.gif"
                            label="By adopting a pet, you are not only enriching your own life, but you are also helping to make the world a better place for all animals."
                        />
                    </div>
                    :
                    <div className="adoptionCard-contract-display p-3 bg-neutral-300 rounded-md grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                        {
                            contracts.map(c => <Contract key={c.user.UID} contract={c} />)
                        }
                    </div>
            }
        </div>
    )
}

// adoption history component
export default function AdoptionHistory(props) {
    // props
    const { token } = props;

    // fetching data
    const { isLoading, error, data } = useQuery('adoptionHistory', () => fetchAdoptionHistory(token));

    if (isLoading)
        return <div>Loading ...</div>

    if (error)
        return <div>Normal Error</div>

    return (
        <div className="adoptionHistory">
            <div className="adoptionHistory-header mb-10">
                <Heading
                    sticker="/assets/profile4.png"
                    heading="Adoption History"
                    subheading="Your previous pet adoption history"
                />
            </div>

            <div className="adoptionHistory-content">
                <AdoptionCard data={data.data} />
            </div>
        </div>
    )
}