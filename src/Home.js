import { useState, useEffect } from 'react';
import BlogList from './Bloglist';

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isPending, setPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
					fetch('http://localhost:8000/blogs')
					.then(res => {
					if(!res.ok){
						throw Error('Data was not fetched ')
					}
					return res.json()
					})
					.then(data => {
						setBlogs(data);
						setPending(false)
						setError(null)
					})
					//Catch any error that comes in!
					.catch(err => {
						setPending(false)
						setError(err.message)
					})
		}, 1000);
	}, []);

	return (
		<div className="home">
			{ error && <div>{ error }</div> }
			{ isPending && <div>The Truth is out...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
			{blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Mausan")} title="Mausan's Blogs!" slogan="*Top Contributor*" />}
		</div>
	 );
}

export default Home;
