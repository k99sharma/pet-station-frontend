// import components
import Image from 'react-bootstrap/Image'

import DashboardPet from '../DashboardPet/DashboardPet';

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
                        <Image
                            width={80}
                            height={80}
                            className="rounded-circle h-5 w-5"
                            src="/asset/user.png"
                            alt="profile"
                        />
                    </div>

                    <div className="userDashboard__header__user__introduction mx-4">
                        <div className="userDashboard__header__user__introduction__name h5">
                            {
                                `${titleCase(user.firstName)} ${titleCase(user.lastName)}`
                            }
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
        </div>
    )
}

export default UserDashboard;