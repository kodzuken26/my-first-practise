import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomer, setPayment, setAddress } from '../../actions/orderActions';
import { Button } from 'react-bootstrap';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

import './Order.css'

const Order = () => {
    const dispatch = useDispatch();
    const order = useSelector(state => state.order);

    const [step, setStep] = useState(1);
    const [customer, setCustomerData] = useState(order.customer);
    const [payment, setPaymentData] = useState(order.payment);
    const [address, setAddressData] = useState(order.address);

    const handleCustomerSubmit = () => {
        dispatch(setCustomer(customer));
        setStep(2);
    };

    const handlePaymentSubmit = () => {
        dispatch(setPayment(payment));
        setStep(3);
    };

    const handleAddressSubmit = () => {
        dispatch(setAddress(address));

        setTimeout(() => {
            try {
                const orderData = { customer, payment, address };
                localStorage.setItem('order', JSON.stringify(orderData)); 
                alert('Заказ оформлен!');
            } catch (error) {
                console.error("Ошибка при сохранении заказа:", error);
            }
        }, 1000);

    };

    return (
        <div className="order-container">
            {step === 1 && (
                <div>
                    <h2>Шаг 1: Данные покупателя</h2>
                    <input type="text" placeholder="Имя" value={customer.name} onChange={e => setCustomerData({ ...customer, name: e.target.value })} />
                    <input type="text" placeholder="Фамилия" value={customer.surname} onChange={e => setCustomerData({ ...customer, surname: e.target.value })} />
                    <input type="email" placeholder="Email" value={customer.email} onChange={e => setCustomerData({ ...customer, email: e.target.value })} />
                    <Button variant="success" onClick={handleCustomerSubmit}>Далее</Button>
                </div>
            )}

            {step === 2 && (
                <div>
                    <h2>Шаг 2: Данные карты</h2>
                    <Cards number={payment.cardNumber} expiry={payment.expiry} cvc={payment.cvc} name={customer.name} />
                    <input type="text" placeholder="Номер карты" value={payment.cardNumber} onChange={e => setPaymentData({ ...payment, cardNumber: e.target.value })} />
                    <input type="text" placeholder="Срок действия" value={payment.expiry} onChange={e => setPaymentData({ ...payment, expiry: e.target.value })} />
                    <input type="text" placeholder="CVC" value={payment.cvc} onChange={e => setPaymentData({ ...payment, cvc: e.target.value })} />
                    <Button variant="success" onClick={handlePaymentSubmit}>Далее</Button>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h2>Шаг 3: Выбор адреса</h2>
                    <input type="text" placeholder="Улица" value={address.street} onChange={e => setAddressData({ ...address, street: e.target.value })} />
                    <input type="text" placeholder="Город" value={address.city} onChange={e => setAddressData({ ...address, city: e.target.value })} />

                    <div style={{ height: '500px', width: '100%' }}>
                        <LoadScript
                            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                            onLoad={() => console.log("Google Maps script loaded successfully")}
                            onError={(error) => console.error("Google Maps script failed to load", error)}
                        >
                            <GoogleMap
                                mapContainerStyle={{ width: '100%', height: '100%' }}
                                center={{ lat: 55.7558, lng: 37.6173 }}
                                zoom={10}
                                onClick={(e) => {
                                    const lat = e.latLng?.lat();
                                    const lng = e.latLng?.lng();
                                    if (lat && lng) {
                                        setAddressData({ ...address, lat, lng });
                                    }
                                }}
                            >
                                {address.lat && address.lng && (
                                    <MarkerF position={{ lat: address.lat, lng: address.lng }} />
                                )}
                            </GoogleMap>
                        </LoadScript>
                    </div>

                    <Button variant="success" onClick={handleAddressSubmit}>Оформить заказ</Button>
                </div>
            )}
        </div>
    );
};

export default Order;