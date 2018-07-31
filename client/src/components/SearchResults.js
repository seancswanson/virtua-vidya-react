import React, { Component } from 'react';

//----------
class SearchResults extends Component {

	//----------
	render() {
		if (this.props.apiResponse) {
			const data = this.props.apiResponse;
			console.log(data);
			const items = data.map((item, i) => {
				console.log(item);
					return <div key={i}>{item.name}</div>;
				})

			return(
				<div>
				{items}
				</div>
			)
		} else {
			return null;
		}
	}
}


export default SearchResults;