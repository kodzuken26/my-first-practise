import React, { Component } from 'react';
import './Catalog.css';

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img 
                    src={this.props.item.imageUrl} 
                    alt={this.props.item.title} 
                    onClick={this.props.onClick} 
                    style={{ cursor: 'pointer' }} 
                />
                <h3 className="text-card">{this.props.item.title}</h3>
                
                <div className="price">
                    <p>100 гр</p>
                    <b>{this.props.item.price} руб</b>
                </div>
                <button className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>В корзину</button>
            </div>
        )
    }
}
