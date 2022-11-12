// importing css
import './UserDashboard.css';

// importing components
import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { useQuery } from 'react-query';

// import components
import Loading from '../Loading/Loading';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import Logout from '../Logout/Logout';

// importing utilities
import { fetchUserData, titleCase } from '../../utils/helper';

// user dashboard function
function UserDashboard(_props) {
    const { user, token, isLoggedIn } = _props;

    // states and handler for OffCanvas component
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // boards option
    const boardsOption = [
        {
            label: 'Profile',
            icon: 'https://cdn.lordicon.com/svbmmyue.json',
            componentName: 'profile'
        },
        {
            label: 'Adoption',
            icon: 'https://cdn.lordicon.com/osuxyevn.json',
            componentName: 'adoption'
        },
        {
            label: 'Settings',
            icon: 'https://cdn.lordicon.com/hwuyodym.json',
            componentName: 'settings'
        }
    ]

    // fetching user data
    const { isLoading, error, data } = useQuery('user', fetchUserData(user.userId, token))

    if (isLoading)
        return <Loading />

    if (error)
        return <div>Error</div>

    if (data.error)
        return <div>ERror message</div>

    return (
        <div className="userDashboard container py-3">
            <div className="userDashboard__offcanvas__trigger" onClick={handleShow} role="button" tabIndex={0} onKeyDown={handleShow}>
                <ProfileIcon width={80} height={80} onClick={handleShow} user={data} />
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <ProfileIcon width={50} height={50} user={data} />
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <div className="offcanvas__body">
                        <div className="offcanvas__body__header">
                            <div className="offcanvas__body__header__name">
                                {
                                    `${titleCase(user.firstName)} ${titleCase(user.lastName)}`
                                }
                            </div>

                            <div className="offcanvas__body__header__username">
                                {
                                    `@${user.username}`
                                }
                            </div>
                        </div>

                        <hr />

                        <div className="offcanvas__body__boards">
                            {
                                boardsOption.map(option => (
                                    <div className="offcanvas__body__boards d-flex align-items-center my-3" key={option.label}>
                                        <div className="offcanvas__body__boards__icon">
                                            <lord-icon
                                                className="lordIcon"
                                                src={option.icon}
                                                trigger="hover"
                                            />
                                        </div>

                                        <div className="offcanvas__body__boards__button h4 mx-3">
                                            {
                                                option.label
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <hr />

                        {
                            isLoggedIn
                                ?
                                <Logout />
                                :
                                null
                        }
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div >
    )
}

export default UserDashboard;