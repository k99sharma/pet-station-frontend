// importing components
import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { IoMdSend } from 'react-icons/io';
import Message from '../Message/Message';

// importing message store class
import MessageStore from './MessageStore';

// importing helper functions
import { getTime } from '../../utilities/helper';

import socket from '../../websocket/socketio';

// message store instance
const messageStore = new MessageStore(socket);

// message input component
function MessageInput(props) {
	// props
	const { currentChat, setIsMessageSent } = props;

	// state
	const [message, setMessage] = useState('');

	// send message handler
	const sendMessage = () => {
		// add this in messages
		messageStore.sendMessage(currentChat, message);
		setMessage('');
		setIsMessageSent(true);
	};

	return (
		<div className="messageInput flex items-center justify-around p-2">
			<div className="messageInput-textInput w-full">
				<TextField
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					name="message"
					fullWidth
					placeholder="Write your message ..."
				/>
			</div>

			<div className="messageInput-send px-2">
				<Button variant="contained" color="info" onClick={sendMessage}>
					<div className="label">Send</div>
					<div className="icon">
						<IoMdSend className="h-8 w-8 p-1" />
					</div>
				</Button>
			</div>
		</div>
	);
}

// message output component
// socket
socket.on('message', (res)=>{
	const { from, content } = res;
	const payload = {
		message: content,
		type: 'received',
		time: getTime(new Date())
	}
	messageStore.saveMessage(from, payload);
});

function MessageOutput(props) {
	// props
	const { currentChat } = props;

	let messages = [];

	// function to fetch messages
	const fetchMessages = () => {
		const temp = messageStore.getMessages(currentChat);		// getting stored messages using username
		messages = temp;
	}
	fetchMessages();

	return (
		<div className="messageOutput bg-neutral-300 h-full rounded-lg p-3">
			{
				messages !== undefined && messages.length !== 0
				?
				<div className="messageOutput-messages">
					{
						messages.map((message) => <Message content={message.message} type={message.type} time={message.time} />)
					}
				</div>
				:
				null
			}
		</div>
	);
}

// message box component
export default function MessageBox(props) {
	// props
	const { currentBrick } = props;

	const [isMessageSent, setIsMessageSent] = useState(false);

	useEffect(() => {
		setIsMessageSent(false);
	}, [isMessageSent])

	return (
		<div className="messageBox flex flex-col h-full w-full">
			<div className="messageBox-output p-1 flex-grow">
				<MessageOutput currentChat={currentBrick} />
			</div>

			<div className="messageBox-input">
				<MessageInput setIsMessageSent={setIsMessageSent} currentChat={currentBrick} />
			</div>
		</div>
	);
}
