import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

import {  Router, Routes, Route, Link } from "react-router-dom";

import Cart from '../Cart/Cart.js';

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Cart onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}руб</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className="empty">
            <h2>У вас еще нет добавленных товаров</h2>
        </div>
    )
}

export default function Header(props) {

    let [cartOpen, setCartOpen] = useState(false)
    return (
        <>
            <Navbar className="back" sticky="top" collapseOnSelect expand="sm">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="./img/logo.png"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className="ms-auto">
                            <Link to="/" className="text-white link"> Главная </Link>
                            <Link to="/route" className="text-white link"> Каталог </Link>
                        </Nav>

                        {cartOpen && (
                            <div className="shop-cart">
                                {props.orders.length > 0 ?
                                    showOrders(props) : showNothing()}
                            </div>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

