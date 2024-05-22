import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [produkter, setProdukter] = useState([]);

    useEffect(() => {
        fetchProdukter();
    }, []);

    const fetchProdukter = async () => {
        try {
            const res = await axios.get('http://localhost:3100/produkter');
            console.log(res.data)
            setProdukter(res.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const deleteProdukt = async (id) => {
        try {
            await axios.delete(`http://localhost:3100/produkter/${id}`);
            fetchProdukter();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div>
            <h1>Kantine Administrasjon</h1>

            <h2>Produkter</h2>
            <ul>
                {produkter.map(produkt => (
                    <li key={produkt.id}>
                        {produkt.Katigori} - {produkt.Navn} - {produkt.mengde_igjen} igjen - {produkt.Pris} NOK
                        <button onClick={() => deleteProdukt(produkt.id)}>Slett</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
