import React from 'react';

//----------


//----------
const GameSearchInput = (props) => {
	return(
		<div className="GameSearchInput">
			<form className="home__hero-search" onSubmit={props.handleSearch}>
				<input className="home__hero-search-input" type="text" placeholder="Search" onChange={props.handleQuery}/>
				<input className="home__hero-search-button" type="submit" value="Go!"/>
			</form>
		</div>
	)
};

export default GameSearchInput;