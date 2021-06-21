import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Contact = () => {
	const [name, setName] = useState('');
	const [lastName, setlastName] = useState('');
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');

	const [isPending, setIsPending] = useState(false);

	const history = useHistory();

	const handleSubmit = e => {
		//Prevents page from loading
		e.preventDefault();
		const contact = { name, lastName, message, email };

		setIsPending(true);

		// This fetches the DB and declares what kind of request I want to make
		// and then the stringify method creates a json object. ID property will be automatically created
		fetch('http://localhost:8000/form/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(contact)
		}).then(() => {
			console.log('Contact was sent');
			setIsPending(false);
			history.push('/');
		});
	};

	return (
		<div className='createContact'>
			<h2>Send Us a Message</h2>
			<form onSubmit={handleSubmit}>
				<label>Name:</label>
				<input
					type='text'
					required
					value={name}
					onChange={e =>
						setName(
							e.target
								.value
						)
					}
				/>

				<label>Last Name:</label>
				<input
					required
					value={lastName}
					onChange={e =>
						setlastName(
							e.target
								.value
						)
					}
				/>
				<label>Message :</label>
				<textarea
					type='text'
					required
					value={message}
					onChange={e =>
						setMessage(
							e.target
								.value
						)
					}
				/>

				<label>Email</label>
				<input
					type='email'
					value={email}
					required
					onChange={e =>
						setEmail(
							e.target
								.value
						)
					}></input>
				{!isPending && (
					<button>Contact!</button>
				)}
				{isPending && (
					<button disabled>
						Adding to blog...
					</button>
				)}
			</form>
		</div>
	);
};

export default Contact;
