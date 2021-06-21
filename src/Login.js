// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const Contact = () => {
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');

// 	const [isPending, setIsPending] = useState(false);

// 	const history = useHistory();

// 	const handleSubmit = e => {
// 		//Prevents page from loading
// 		e.preventDefault();
// 		const contact = { email, password };

// 		setIsPending(true);

// 		// This fetches the DB and declares what kind of request I want to make
// 		// and then the stringify method creates a json object. ID property will be automatically created
// 		fetch('http://localhost:8000/login', {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify(contact)
// 		}).then(() => {
// 			console.log('You are now logged in');
// 			setIsPending(false);
// 			history.push('/');
// 		});
// 	};

// 	return (
// 		<div className='createContact'>
// 			<h2>Admin Login</h2>
// 			<form onSubmit={handleSubmit}>
// 				<label>Admin Credentials:</label>
// 				<input
// 					value={email}
// 					onChange={e =>
// 						setEmail(
// 							e.target
// 								.value
// 						)
// 					}
// 				/>
// 				<label>Admin Password:</label>
// 				<input
// 					value={password}
// 					onChange={e =>
// 						setPassword(
// 							e.target
// 								.value
// 						)
// 					}
// 				/>

// 				{!isPending && <button>Login</button>}
// 				{isPending && (
// 					<button disabled>
// 						Adding to blog...
// 					</button>
// 				)}
// 			</form>
// 		</div>
// 	);
// };

// export default Contact;
