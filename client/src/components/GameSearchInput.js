import React from 'react';
import PropTypes from 'prop-types';


//----------
const GameSearchInput = () => {
	return(
		<div className="GameSearchInput">
			<form className="home__hero-search">
				<input className="home__hero-search-input" type="text" placeholder="Search"/>
				<input className="home__hero-search-button" type="button" value="Go!"/>
			</form>
		</div>
	)
};

export default GameSearchInput;