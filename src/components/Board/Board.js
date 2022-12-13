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
        <div className='board'>
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
    )
}