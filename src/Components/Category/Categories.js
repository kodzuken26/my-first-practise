import React, { Component } from 'react';
import "./Category.css"

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'china',
                    name: 'Китайский чай'
                },
                {
                    key: 'indi',
                    name: 'Индийский чай'
                },
                {
                    key: 'japan',
                    name: 'Японский чай'
                },
            ]
        }
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
                <div className="sort-buttons" onClick={this.props.sortByPriceAscending}>По возрастанию</div>
                <div className="sort-buttons" onClick={this.props.sortByPriceDescending}>По убыванию</div>
            </div>
        )
    }
}