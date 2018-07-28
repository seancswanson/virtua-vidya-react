import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GameSearchInput from './GameSearchInput';

//----------
const Home = () => {
	return(
		<div className="Home">
			<div className="home__hero-container">
				<div className="home__hero-text">
					<h1>Virtua</h1>
					<h1>Shelf</h1>
					<p>Video Games & Visualizations</p>
					<img src="assets/controller.png"/>
				</div>
			</div>
			<GameSearchInput />
		</div>
	)
};

export default Home;