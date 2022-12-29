// importing components
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { IoMdSend } from 'react-icons/io';

// importing message store class
import MessageStore from './MessageStore';

import socket from '../../websocket/socketio';

// message store instance
const messageStore = new MessageStore(socket);

// message input component
function MessageInput(props) {
	// props
	const { currentChat } = props;

	// state
	const [message, setMessage] = useState('');

	// send message handler
	const sendMessage = () => {
		// add this in messages
		messageStore.sendMessage(currentChat, message);
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
function MessageOutput() {
	return (
		<div className="messageOutput bg-slate-200 h-full rounded-lg p-3">
			Messages
		</div>
	);
}

// message box component
export default function MessageBox(props) {
	// props
	const { currentBrick } = props;

	return (
		<div className="messageBox flex flex-col h-full w-full">
			<div className="messageBox-output p-1 flex-grow">
				<MessageOutput currentChat={currentBrick} />
			</div>

			<div className="messageBox-input">
				<MessageInput currentChat={currentBrick} />
			</div>
		</div>
	);
}
