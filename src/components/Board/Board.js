/* eslint-disable react/prop-types */
// importing components
import Profile from '../Profile/Profile';
import Adoption from '../Adoption/Adoption';
import Messages from '../Messages/Messages';
import Settings from '../Settings/Settings';

// board component
export default function Board(props) {
    const { option, authCtx, user } = props;

    return (
        <>
            <div className='board flex items-center justify-center'>
                {
                    option === 'profile'
                        ?
                        <Profile
                            authCtx={authCtx}
                            user={user}
                        />
                        :
                        null
                }
                {
                    option === 'adoption'
                        ?
                        <Adoption
                            authCtx={authCtx}
                            user={user}
                        />
                        :
                        null
                }
                {
                    option === 'messages'
                        ?
                        <Messages
                            authCtx={authCtx}
                            user={user}
                        />
                        :
                        null
                }
                {
                    option === 'settings'
                        ?
                        <Settings
                            authCtx={authCtx}
                            user={user}
                        />
                        :
                        null
                }
            </div>


            <div className="profile-copyright font-lighter text-xs text-center text-neutral-800 py-10">
                {
                    `Copyright © ${new Date().getFullYear()} Pet Station. All rights reserved.`
                }
            </div>
        </>
    )
}