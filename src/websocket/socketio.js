// importing libraries
import { io } from 'socket.io-client';

const username = 'user1'; // username

const URL = `https://petstation.onrender.com?username=${username}`;
const socket = io(URL, { autoConnect: false });

export default socket;
