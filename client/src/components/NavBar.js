import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//----------
const styles = {
	navbar: {
    	boxShadow: 'inherit',
	}
}


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