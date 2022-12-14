/* eslint-disable react/prop-types */
// importing components
import { useQuery } from "react-query"

// importing helper functions
import { fetchAdoptionHistory } from "../../utilities/helper";

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
            <div className="adoptionHistory-header mb-10 flex items-center">
                <div className="adoptionHistory-header-img">
                    <img
                        src="/assets/profile4.png"
                        height={100}
                        width={100}
                        alt="adoption history"
                    />
                </div>

                <div className="adoptionHistory-header-content">
                    <div className="adoptionHistory-header-content-title text-2xl mx-10 mb-1 font-lighter">
                        Adoption History
                    </div>

                    <div className="adoptionHistory-header-content-subtitle mx-10 font-bold">
                        Your previous pet adoption history
                    </div>
                </div>
            </div>

            <div className="adoptionHistory-content bg-neutral-300 rounded-md">
                {
                    data.data.count === 0
                        ?
                        <div className="adoptionHistory-content-empty p-3 font-bold text-neutral-800">
                            No adoption history.
                        </div>
                        :
                        <div>
                            Adoption History
                        </div>
                }
            </div>
        </div>
    )
}