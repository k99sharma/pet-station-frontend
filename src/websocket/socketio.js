// importing libraries
import { io } from 'socket.io-client';

// importing helper functions
import { getSocketSessionId } from '../utilities/helper';

const username = 'user1'; // username

const savedId = getSocketSessionId(); // getting saved socket Id
const sessionID = savedId !== null ? savedId : '';
const URL = `https://petstation.onrender.com?username=${username}&sessionID=${sessionID}`;
const socket = io(URL, { autoConnect: false });

export default socket;
