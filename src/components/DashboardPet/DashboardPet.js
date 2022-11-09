// importing components
import CreateNewPet from '../CreateNewPet/CreateNewPet'
import DashboardPetShow from '../DashboardPetShow/DashboardPetShow';

// dashboard pet component
function DashboardPet() {
    return (
        <div className="dashboardPet">
            <div className="dashboardPet__header h4">
                Your Pets
            </div>

            <div className="dashboardPet__create my-4">
                <CreateNewPet />
            </div>

            <div className="dashboardPet__petShow my-2">
                <DashboardPetShow />
            </div>
        </div>
    )
}

export default DashboardPet;