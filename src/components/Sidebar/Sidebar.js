/* eslint-disable react/prop-types */
// importing components
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAlignLeft } from 'react-icons/fa';

import { Drawer, Button, Avatar, Divider } from "@mui/material";
import Banner from "../Banner/Banner";

// importing utility function
import { titleCase } from '../../utilities/helper';

// sidebar component
export default function Sidebar(props) {
    // props
    const { user, authCtx, option, setOption } = props;
    const navigator = useNavigate();

    const [open, setOpen] = useState(false);

    // function to handle logout
    const handleLogout = () => {
        authCtx.logout();   // logout user
        navigator('/', { replace: true });
    }

    // function to handle board selection
    const handleBoardSelection = (value) => {
        setOption(value);   // set option
        setOpen(false);
    }

    // options
    const boardOptions = [{
        id: 1,
        img: 'profile.png',
        label: 'profile'
    },
    {
        id: 2,
        img: 'adoption.png',
        label: 'adoption'
    },
    {
        id: 3,
        img: 'messages.png',
        label: 'messages'
    },
    {
        id: 4,
        img: 'settings.png',
        label: 'settings'
    }];

    return (
        <div className='sidebar'>
            <div className="p-5">
                <Button onClick={() => { setOpen(!open) }}>
                    <FaAlignLeft
                        className="h-6 w-6"
                    />
                </Button>
            </div>

            <Drawer
                anchor='left'
                open={open}
                onClose={() => { setOpen(false) }}
            >
                <div className='sidebar p-5'>
                    <div className='sidebar-banner mb-5'>
                        <Banner />
                    </div>

                    <div className='sidebar-header flex items-center'>
                        <div className='sidebar-header-avatar'>
                            <Avatar
                                sx={{ width: 50, height: 50 }}
                            >
                                {
                                    user.firstName.charAt(0)
                                }
                            </Avatar>
                        </div>

                        <div className='sidebar-header-content mx-5'>
                            <div className='sidebar-header-content-username font-semibold'>
                                {
                                    `${titleCase(user.firstName)} ${titleCase(user.lastName)}`
                                }
                            </div>

                            <div className='sidebar-header-content-email font-lighter text-sm'>
                                {
                                    user.email
                                }
                            </div>
                        </div>
                    </div>

                    <div className="my-3">
                        <Divider />
                    </div>

                    <div className="sidebar-options">
                        {
                            boardOptions.map(board => (
                                <div key={board.label} className={`${option === board.label ? 'bg-blue-100' : null} hover:bg-blue-100 p-2 my-5`}>
                                    <button onClick={() => { handleBoardSelection(board.label); }} className="sidebar-options-option flex items-center justify-center" type="button">
                                        <div className="sidebar-options-option-image">
                                            <img
                                                className="mx-2"
                                                src={`/assets/${board.img}`}
                                                height={20}
                                                width={20}
                                                alt={board.label}
                                            />
                                        </div>

                                        <div className="sidebar-options-option-label text-lg">
                                            {
                                                titleCase(board.label)
                                            }
                                        </div>
                                    </button>
                                </div>
                            ))
                        }
                    </div>

                    <div className="my-3">
                        <Divider />
                    </div>

                    <div className="sidebar-logout my-20">
                        <button className="flex justify-center items-center" onClick={handleLogout} type="button">
                            <div className="sidebar-logout-image">
                                <img
                                    className="mx-2"
                                    src='/assets/logout.png'
                                    height={20}
                                    width={20}
                                    alt='Logout'
                                />
                            </div>

                            <div className="sidebar-logout-label text-lg">
                                Logout
                            </div>
                        </button>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}