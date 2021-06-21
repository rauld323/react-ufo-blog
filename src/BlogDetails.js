import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, error, isPending } = useFetch(
		'http://localhost:8000/blogs/' + id
	);
	const history = useHistory();

	const handleClick = () => {
		fetch('http://localhost:8000/blogs' + blog._id, {
			method: 'DELETE'
		}).then(() => {
			history.push('/');
		});
	};

	return (
		<div className='blog-details'>
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<img
						src={
							'http://localhost:8000/' +
							blog.blog
								.blogImage
						}
						alt='aliens'
					/>
					<h2>{blog.blog.name}</h2>
					<p>
						Written by{' '}
						{blog.blog.author}
					</p>
					<div>{blog.blog.content}</div>
					<button onClick={handleClick}>
						Delete Blog
					</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
