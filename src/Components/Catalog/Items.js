import React, { useState } from 'react';
import { Container, Row, Modal, Button } from 'react-bootstrap'; 
import './Catalog.css';
import { Item } from './Item';
import { Link, useLocation } from 'react-router-dom';

export default function Items(props) {
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleShow = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedItem(null);
    };

    return (
        <Container className="main">
            {location.pathname === "/route" && (
                <Link to="/route/cart">
                    <img src="./img/basket.png" className="basket" alt="Корзина" />
                </Link>
            )}
            <Row>
                {props.items?.map(el => (
                    <div key={el.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <Item 
                            item={el} 
                            onAdd={props.onAdd} 
                            onClick={() => handleShow(el)} 
                        />
                    </div>
                ))}
            </Row>

            
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedItem?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedItem && (
                        <>
                            <img src={selectedItem.imageUrl} alt={selectedItem.title} style={{ width: '100%', height: '50%' }} />
                            <p>{selectedItem.description}</p> {/* Предполагается, что у вас есть поле description */}
                            <p style={{color: 'green'}}>Цена: {selectedItem.price} руб</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
