import React, { Component } from 'react';
import Item from './Item';
import './List.css';

class List extends Component {
	render() {
		return (
			<div className="list">
				{this.props.items.map(item => <Item key={item.id} item={item}/>)}
			</div>
		)
	}
}

export default List;