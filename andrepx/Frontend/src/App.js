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
            console.log(res.data);
            setProdukter(res.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const kjopProdukt = async (id) => {
      console.log(id)
        try {
            await axios.put(`http://localhost:3100/kjop`, {
              id:id
            });
            fetchProdukter(); // Oppdater tabellen etter kjøp
        } catch (error) {
            console.error('Error purchasing product:', error);
        }
    };

    return (
        <div>
            <h1>Kantine Administrasjon</h1>
            <h2>Produkter</h2>
            <table>
                <thead>
                    <tr>
                        <th>Katigori</th>
                        <th>Navn</th>
                        <th>Mengde igjen</th>
                        <th>Pris</th>
                        <th>Handling</th>
                    </tr>
                </thead>
                <tbody>
                    {produkter.map(produkt => (
                        <tr key={produkt.id}>
                            <td>{produkt.Katigori}</td>
                            <td>{produkt.Navn}</td>
                            <td>{produkt.mengde_igjen}</td>
                            <td>{produkt.Pris}</td>
                            <td>
                                <button onClick={() => kjopProdukt(produkt.id)}>Kjøp</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
