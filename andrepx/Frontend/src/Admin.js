import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [produkter, setProdukter] = useState([]);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        fetchProdukter();
    }, []);

    const fetchProdukter = async () => {
        try {
            const res = await axios.get('http://localhost:3100/admin/products');
            setProdukter(res.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const increaseStock = async (id) => {
        try {
            await axios.put(`http://localhost:3100/increaseStock/${id}`, {
                amount: amount
            });
            fetchProdukter(); // Update the table after increasing stock
        } catch (error) {
            console.error('Error increasing stock:', error);
        }
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Actions</th>
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
                                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                                <button onClick={() => increaseStock(produkt.id)}>Increase Stock</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;
