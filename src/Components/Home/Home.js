import React, { Component } from 'react';
import { Container, CardGroup, Card } from "react-bootstrap";
import "./Home.css"

export default class Home extends Component {
    render() {
        return (
            <Container class="d-inline" className="full">
                <div className="list">
                    <nav>
                        <ul>
                            <li className="list-items"><a href="/route">Новинки</a> </li>
                            <li className="list-items"><a href="/route">Китайский чай</a> </li>
                            <li className="list-items"><a href="/route">Индийский чай</a> </li>
                            <li className="list-items"><a href="/route">Японский чай</a> </li>
                            <li className="list-items"><a href="/route">Ароматизированный чай</a> </li>
                            <li className="list-items"><a href="/route">Матча</a> </li>
                            <li className="list-items"><a href="/route">Подарочный ассортимент</a> </li>
                            <li className="list-items"><a href="/route">Специальное предложение</a> </li>
                        </ul>
                    </nav>
                </div>

                <CardGroup className="cards-row">
                    <h2>Популярные товары</h2>
                    <div className="card-container">
                        <Card className="m-x-auto">
                            <a href="/route" alt="">
                                <Card.Img className="m-x-auto" src="./img/main1.png" />
                            </a>
                        </Card>
                        <Card className="m-x-auto">
                            <a href="/route" alt="">
                                <Card.Img className="m-x-auto" src="./img/main2.png" />
                            </a>
                        </Card>
                        <Card className="m-x-auto">
                            <a href="/route" alt="">
                                <Card.Img className="m-x-auto" src="./img/main3.png" />
                            </a>
                        </Card>
                        <Card className="m-x-auto">
                            <a href="/route" alt="">
                                <Card.Img className="m-x-auto" src="./img/main4.png" />
                            </a>
                        </Card>
                        <Card className="m-x-auto">
                            <a href="/route" alt="">
                                <Card.Img className="m-x-auto" src="./img/main5.png" />
                            </a>
                        </Card>
                        <Card className="m-x-auto">
                            <a href="/route" alt="">
                                <Card.Img className="m-x-auto" src="./img/main6.png" />
                            </a>
                        </Card>
                    </div>
                </CardGroup>

            </Container>
        )
    }
}