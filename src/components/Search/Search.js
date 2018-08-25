import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

	constructor(props) {
		super(props);

		this.state = {
			search: ''
		};

		this.handleChangeInput = this.handleChangeInput.bind(this);
		this.handleKeyPressInput = this.handleKeyPressInput.bind(this);
	}

	handleChangeInput(event) {
		this.setState({
			search: event.target.value
		});
	}

	handleKeyPressInput(event) {
		if (event.key === 'Enter') {
			this.props.submit(this.state.search);
		}
	}

	render() {
		return (
			<div className="search">
				<input type="text" placeholder="Digite um HQ" onChange={this.handleChangeInput} onKeyPress={this.handleKeyPressInput}/>
			</div>
		);
	}
}

export default Search;