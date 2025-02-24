import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Footer.css'

export default class Footer extends Component{
    render() {
        return (
            <>
                <Navbar className="back" collapseOnSelect expand="sm">
                    <Container>
                        <div class="text-white" className="footer-text">Яркость вкуса @original 2025</div>
                    </Container>
                </Navbar>
            </>
        )
    }
}