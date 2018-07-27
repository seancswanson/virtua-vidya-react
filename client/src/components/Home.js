import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const Home = () => {
	return(
		<div className="Home">
			<div className="home__hero">
				<div className="home__hero-text">
					<h1>Virtua Shelf</h1>
					<p>Video Game Collection Visualization</p>
				</div>
				<div className="home__search">
					<form>
						<input type="text" />
						<input type="button" value="Go!"/>
					</form>
				</div>
			</div>
		</div>
	)
};

export default Home;