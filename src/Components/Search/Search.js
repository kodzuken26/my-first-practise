import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Item } from '../Catalog/Item';
import './Search.css'

export default function Search({ items }) {
    const [value, setValue] = useState('');
    const [searchPerformed, setSearchPerformed] = useState(false);

    const filteredItems = (items || [])
        .filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 8); 

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchPerformed(true); 
    };

    return (
        <div className="well">
            <Form inline onSubmit={handleSearch}>
                <div className="input-group">
                    <FormControl
                        onChange={(event) => setValue(event.target.value)}
                        type='text'
                        className="form-control"
                        placeholder="Поиск товаров"
                    />
                    <span className="input-group-btn">
                        <Button type="submit" variant="success">Поиск</Button>
                    </span>
                </div>
            </Form>

            {searchPerformed && filteredItems.length > 0 ? (
                <div className="grid-container">
                    {filteredItems.map((el) => (
                        <Item item={el} key={el.id} />
                    ))}
                </div>
            ) : searchPerformed ? (
                <p>Ничего не найдено</p>
            ) : null}
        </div>
    );
}