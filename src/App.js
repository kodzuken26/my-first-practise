import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Items from './Components/Catalog/Items';
import { Categories } from './Components/Category/Categories';
import Search from './Components/Search/Search'

import { Provider } from 'react-redux';
import store from './store/store';

import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import Catalog from "./Components/Catalog/Items";
import Order from "./Components/Order/Order";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: "Зеленый чай - Сенча",
                    price: 160,
                    category: "japan",
                    description: "Сенча - это японский зеленый чай, отличающийся нежным травянистым вкусом и освежающим ароматом.",
                    imageUrl: "/img/products/tea1.png",
                },
                {
                    id: 2,
                    title: "Связанный чай (календула)",
                    price: 690,
                    category: "indi",
                    description: "Окунитесь в удивительный мир чайной традиции – c связанным чаем, который очаровывает своим изысканным вкусом и утонченным внешним видом.",
                    imageUrl: "/img/products/tea2.png",
                },
                {
                    id: 3,
                    title: "Зеленый чай - Люй Мао Фен",
                    price: 187,
                    category: "china",
                    description: "Крупнолистовой чай Люй Мао Фен из региона Ханчжоу является одним из самых знаменитых китайских чаев.",
                    imageUrl: "/img/products/tea3.png",
                },
                {
                    id: 4,
                    title: "Зеленый чай - Аньцзи Бай Ча",
                    price: 150,
                    category: "china",
                    description: "Чай Аньцзи Бай Ча выращивается в китайской провинции Чжэцзян в непосредственном соседстве с бамбуковыми лесами.",
                    imageUrl: "/img/products/tea4.png",
                },
                {
                    id: 5,
                    title: "Зеленый чай с лимоном",
                    price: 150,
                    category: "china",
                    description: "Перед Вами элитный зеленый чай с добавлением одних из самых вкусных и полезных добавок. Это волшебная вкусовая мелодия, при которой терпкость зеленого чая дополняется кислинкой",
                    imageUrl: "/img/products/tea5.png",
                },
                {
                    id: 6,
                    title: "Зеленый чай - крупнолистовой",
                    price: 160,
                    category: "indi",
                    description: "Крупнолистовой зеленый чай - это один из самых популярных сортов чая в средней Азии.",
                    imageUrl: "/img/products/tea6.png",
                },
                {
                    id: 7,
                    title: "Зеленый чай - Генмайча",
                    price: 160,
                    category: "japan",
                    description: "Генмайча – классический японский чай. Изготовлен чай в Китае по Японской рецептуре.",
                    imageUrl: "/img/products/tea7.png",
                },
                {
                    id: 8,
                    title: "Связанный чай - цитрус",
                    price: 160,
                    category: "indi",
                    description: "Чёрный чай «Цитрус» с лемонграссом, дольками лимона и цедрой апельсина можно употреблять в летнее время года как освежающий напиток.",
                    imageUrl: "/img/products/tea8.png",
                },
            ]
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
    }

    sortByPriceAscending = () => {
        const sortedItems = [...this.state.currentItems].sort((a, b) => a.price - b.price);
        this.setState({ currentItems: sortedItems });
    }

    sortByPriceDescending = () => {
        const sortedItems = [...this.state.currentItems].sort((a, b) => b.price - a.price);
        this.setState({ currentItems: sortedItems });
    }

    render() {
        return (
            <div>
                <Router>
                    <Header orders={this.state.orders} onDelete={this.deleteOrder} />

                    <Provider store={store}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/route" element={<Catalog />} />
                            <Route path="/route/cart" element={<Cart orders={this.state.orders} onDelete={this.deleteOrder} />} />
                            <Route path="/order" element={<Order />} />
                        </Routes>
                    </Provider>

                    <Search items={this.state.items} />
                    <Categories chooseCategory={this.chooseCategory} sortByPriceAscending={this.sortByPriceAscending}
                        sortByPriceDescending={this.sortByPriceDescending} />
                    <Items items={this.state.currentItems} onAdd={this.addToOrder} />
                    <Footer />

                </Router>
            </div>
        );
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({ currentItems: this.state.items })
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({ orders: [...this.state.orders, item] })
    }
}

export default App;
