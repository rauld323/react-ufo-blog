import { useState, useEffect } from 'react';
import BlogList from './Bloglist';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'Encouters in the 1960s', body: 'lorem ipsum...', author: 'Mausan', id: 1 },
		{ title: 'Face on Mars!', body: 'lorem ipsum...', author: 'Bell', id: 2 },
		{ title: 'Video Autopsy', body: 'lorem ipsum...', author: 'Lazaar', id: 3 },
		{ title: 'Chupacabra', body: 'lorem ipsum...', author: 'Mausan', id: 4 },
		{ title: 'Pyramids on the Moon', body: 'lorem ipsum...', author: 'Hoglan', id: 5 }
	]);

	const handleDelete = (id) =>{
		const newBlogs = blogs.filter(blog => blog.id !== id );
		setBlogs(newBlogs)
	}

	useEffect(() => {
		console.log('useEffect worked')
		console.log(blogs)
	}, []);

	return (
		<div className="home">
				<BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
				<BlogList blogs={blogs.filter((blog) => blog.author === "Mausan")} title="Mausan's Blogs!" slogan="*Top Contributor*"/>
		</div>
	 );
}

export default Home;
