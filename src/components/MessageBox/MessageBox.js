// importing components
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { IoMdSend } from 'react-icons/io';

// message input component
function MessageInput() {
	const [message, setMessage] = useState('');

	const sendMessage = () => {
		console.log(message);
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
	return <div className="messageOutput">Message Output</div>;
}

// message box component
export default function MessageBox() {
	return (
		<div className="messageBox flex flex-col">
			<div className="messageBox-output">
				<MessageOutput />
			</div>

			<div className="messageBox-input">
				<MessageInput />
			</div>
		</div>
	);
}
