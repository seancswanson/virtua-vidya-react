import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GameSearchInput from './GameSearchInput';



//----------
class Home extends Component {
  constructor(props) {
    super(props);
  }

	state = {
	    apiResponse: {},
      searchValue: ''
	}

  //----------
  handleSearchSubmit = (event) => {

    console.log('Search click.', this.state.searchValue);
    event.preventDefault();

    fetch(`/api/getVideoGameData?query=${this.state.searchValue}`, {method: 'get'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            apiResponse: result
          });
        });
  }

  //----------
  handleSearchValueChange = (event) => {
    this.setState({
      searchValue: event.target.value
    });
  }

	render() {
		return(
			<div className="Home">
				<div className="home__hero-container">
					<div className="home__hero-text">
						<h1>Virtua</h1>
						<h1>Shelf</h1>
						<p>Video Games & Visualizations</p>
					</div>
				</div>
				<GameSearchInput handleQuery={this.handleSearchValueChange} handleSearch={this.handleSearchSubmit} />
			</div>
		)
	};
		
	}

export default Home;