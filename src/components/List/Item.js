import React, { Component } from 'react';
import './Item.css';

class Item extends Component {

	render() {
		return(
			<div className="item">
                <div className="item__image">
                    <img alt="Comics" src={this.props.item.images[0].path + '.' + this.props.item.images[0].extension} />
                </div>
                <div className="item__content">
                    <div className="item__title">
                        {this.props.item.title}
                    </div>
                    <div className="item__modified">
                        {this.props.item.modified}
                    </div>
                    <div className="item__description">
                        {this.props.item.description}
                    </div>
                </div>
            </div>
		)
	}

}

export default Item;