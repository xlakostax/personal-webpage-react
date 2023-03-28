import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './routes/About';
import Contacts from './routes/Contacts';
import Home from './routes/Home';
import Notes from './routes/Notes';
import NotFound from './routes/NotFound';
import Policy from './routes/Policy';
import Work from './routes/Work';
import './styles/index.css';

//const routing = (
  //<Router>
    //<Routes>
      //<Route exact path = '/' component = {Home} />
      //<Route exact path = '/work' component = {Work} />
      //<Route exact path = '/about' component = {About} />
      //<Route exact path = '/contacts' component = {Contacts} />
      //<Route exact path = '/notes' component = { Notes } />
      //<Route exact path = '/policy' component = { Policy } />
      //<Route path = '*' component = { NotFound } />  {/* For correct 404 rendering use attribute path = '*' */}
    //</Routes>
  //</Router>
//);

const routing = createBrowserRouter([
  
	{
		path: '/',
		element: <Home />,
	},
	{
		path:'/work',
		element: <Work />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/contacts',
		element: <Contacts />,
	},
	{
		path: '/notes',
		element: <Notes />,
	},
	{
		path: '/policy',
		element: <Policy />,
	},
	{
		path: '/*',
		element: <NotFound />,
	},	
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={routing} />
	</React.StrictMode>
);
