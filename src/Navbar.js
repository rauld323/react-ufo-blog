import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link to='/'>
				<h1>The UFO Blog</h1>
			</Link>

			<div className='links'>
				<Link to='/'>Home</Link>
				<Link to='/create'>New Blog</Link>
				{/* <Link to='/login'>Login</Link> */}
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
			</div>
		</nav>
	);
};

export default Navbar;
