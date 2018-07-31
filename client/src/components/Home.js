import React, { Component } from 'react';
import GameSearchInput from './GameSearchInput';
import SearchResults from './SearchResults';

//----------
class Home extends Component {
	  constructor(props) {
    super(props);
  }

  state = {
	    apiResponse: [],
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

    this.apiResponse = Object.keys(this.state.apiResponse) || {};
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
        <SearchResults apiResponse={this.state.apiResponse}/>
			</div>
		)
	};
		
	}

export default Home;