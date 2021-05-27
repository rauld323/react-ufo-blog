import { useState } from 'react'

const Create = () => {
		const [title, setTitle] = useState('')
		const [body, setBody] =useState('')
		const [picture, setPicture] = useState('')
		const [author, setAuthor] = useState('Maussan')

		const [isPending, setIsPending] = useState(false)

		const handleSubmit = (e) => {
			//Prevents page from loading
			e.preventDefault();
			const blog = { title, body, picture, author };

			setIsPending(true);

			// This fetches the DB and declares what kind of request I want to make
			// and then the stringify method creates a json object. ID property will be automatically created
			fetch('http://localhost:8000/blogs', {
				method: 'POST',
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(blog)
			}).then(() => {
				console.log("new blog added")
				setIsPending(false)
			})
		}

	return (
		<div className="create">
			<h2>Create Content</h2>
			<form onSubmit={handleSubmit}>

					<label>Blog Title:</label>
					<input
					type="text"
					required
					value ={title}
					onChange={(e) => setTitle(e.target.value)}
					/>

				<label>Blog Body:</label>
				<textarea
					required
					value = {body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<label>Blog Picture URL :</label>
				<input
					type="text"
					required
					value={picture}
					onChange={(e) => setPicture(e.target.value)}
				/>

				<label>Blog author:</label>
				<select
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value="Maussan">Mausan</option>
					<option value="Norry">Norry</option>
				</select>
				{ !isPending && <button>Add Blog</button> }
				{ isPending && <button disabled>Adding to blog...</button> }
			</form>
		</div>
	 );
}

export default Create;
