import React, { Component } from 'react';

//----------
class SearchResults extends Component {

	//----------
	render() {
		if (this.props.apiResponse.length) {
			const data = this.props.apiResponse;
			console.log('data', data);
			const items = data.map((item, i) => {
				console.log(item);
					return <div className="card" key={i}><img className="card-cover" src={item.cover ? item.cover.url : 'https://upload.wikimedia.org/wikipedia/it/3/39/Sad_mac.jpg'} /><p>{item.name}</p></div>;
				})

			return items;
			
		} else {
			return null;
		}
	}
}


export default SearchResults;