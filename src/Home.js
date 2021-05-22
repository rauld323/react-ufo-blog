import { useState, useEffect } from 'react';
import BlogList from './Bloglist';

const Home = () => {
	const [blogs, setBlogs] = useState(null);


	useEffect(() => {
		fetch('http://localhost:8000/blogs')
			.then(response => {
				return response.json()
			})
			.then(data => {
				setBlogs(data)
			})
	}, []);

	return (
		<div className="home">
			{blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
			{blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Mausan")} title="Mausan's Blogs!" slogan="*Top Contributor*" />}
		</div>
	 );
}

export default Home;
