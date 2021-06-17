import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NoPage from './NoPage';
import About from './About';
import Contact from './Contact';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='content'>
					<Switch>
						<Route
							exact
							path='/'>
							<Home />
						</Route>
						<Route path='/create'>
							<Create />
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
						<Route path='/blogs/:id'>
							<BlogDetails />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='*'>
							<NoPage />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
