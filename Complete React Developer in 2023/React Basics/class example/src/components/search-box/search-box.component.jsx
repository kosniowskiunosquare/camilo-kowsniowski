import React, { Component } from 'react';

import './search-box.styles.css';

class SearchBox extends Component {
	render() {
		return (
			<input
				className={`search-box ${this.props.className}`}
				type='search'
				placeholder={this.props.placeholder}
				// anonymous function
				onChange={this.props.onChangehandler}
			/>
		);
	}
}

export default SearchBox;
