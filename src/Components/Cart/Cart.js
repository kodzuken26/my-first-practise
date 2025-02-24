
import React, { Component } from 'react';
import "./Cart.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
    getTotalPrice = () => {
        return this.props.orders.reduce((sum, item) => sum + item.price, 0);
    };

    render() {
        const { orders = [], onDelete } = this.props;

        return (
            <>
                <h3>Корзина</h3>
                {orders.length > 0 ? (
                    <>
                        {orders.map((item, index) => (
                            <div key={index} className="cart-item">
                                <div className="cart-info">
                                    <img src={item.imageUrl} alt={item.title} />
                                    <h2>{item.title}</h2>
                                    <b>{item.price} руб</b>
                                </div>
                                <div className="cart-remove">
                                    <img
                                        src="/img/remove.svg"
                                        alt="Удалить"
                                        onClick={() => onDelete(item.id)}
                                        className="remove-icon"
                                    />
                                </div>
                            </div>
                        ))}
                        <div className="cart-summary">
                            <h3>Общая сумма: {this.getTotalPrice()} руб</h3>
                            <Link to="/order">
                                <Button variant="success">Оформить заказ</Button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <p>Корзина пуста :c</p>
                )}
            </>
        );
    }
}