import { useState } from 'react';

const Home = () => {
	const [blogs, SetBlogs] = useState([
		{ title: 'Encouters in the 1960s', body: 'lorem ipsum...', author: 'Mausan', id: 1 },
		{ title: 'Face on Mars!', body: 'lorem ipsum...', author: 'Bell', id: 2 },
		{ title: 'Video Autopsy', body: 'lorem ipsum...', author: 'Lazaar', id: 3 }
	]);

	return (
		<div className="home">
				{blogs.map((blog) => (
					<div className="blog-preview" key={blog.id}>
							<h2>{blog.title}</h2>
							<p>Written by {blog.author}</p>
					</div>
				))}
		</div>
	 );
}

export default Home;
