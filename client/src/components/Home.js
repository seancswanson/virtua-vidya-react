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
      isLoading: false,
      searchValue: ''
	}

  //----------
  handleSearchSubmit = (event) => {

    console.log('Search click.', this.state.searchValue);
    event.preventDefault();
        this.setState({ isLoading: true })

    fetch(`/api/getVideoGameData?query=${this.state.searchValue}`, {method: 'get'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            apiResponse: result,
            isLoading: false
          });
        }).catch(function() {
          console.log('error');
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
        <SearchResults apiResponse={this.state.apiResponse} />
        {this.state.isLoading ? <div className="loader"><div className="spinner"></div><p>Loading...</p></div> : ''}
			</div>
		)
	};
		
	}

export default Home;