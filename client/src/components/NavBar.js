import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = (props) => {
	return(
		<div>
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='title' color='inherit'>
				<Link to="/" className="navbar__brand"> Virtua Shelf </Link>
				</Typography>	
			</Toolbar>
		</AppBar>
		</div>
	)
};

export default NavBar;