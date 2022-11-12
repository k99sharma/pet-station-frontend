// importing css
import './UserDashboard.css';

// import components
import DashboardPet from '../DashboardPet/DashboardPet';
import DashboardAdoption from '../DashboardAdoption/DashboardAdoption';

// importing utilities
import { titleCase } from '../../utils/helper';

// user dashboard function
function UserDashboard(_props) {
    const { user } = _props;

    return (
        <div className="userDashboard container p-3 my-4">
            <div className="userDashboard__header py-3">
                <div className="userDashboard__header__user d-flex align-items-center">
                    <div className="userDashboard__header__user__profilePicture">
                        <img
                            width={80}
                            height={80}
                            src="/assets/user.png"
                            alt="profile"
                        />
                    </div>

                    <div className="userDashboard__header__user__introduction mx-4">
                        <div className="userDashboard__header__user__introduction__name d-flex">
                            <div className="userDashboard__header__user__introduction__name__hello">
                                Hello,
                            </div>

                            <div className="userDashboard__header__user__introduction__name__name mx-1">
                                {
                                    `${titleCase(user.firstName)} ${titleCase(user.lastName)}.`
                                }
                            </div>
                        </div>

                        <div className="userDashboard__header__user__introduction__email">
                            {
                                user.email
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="userDashboard__pet py-3">
                <DashboardPet />
            </div>

            <div className="userDashboard__adoption py-3">
                <DashboardAdoption />
            </div>
        </div>
    )
}

export default UserDashboard;