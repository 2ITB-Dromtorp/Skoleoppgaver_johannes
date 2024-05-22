import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [produkter, setProdukter] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [totalPris, setTotalPris] = useState(0); // Changed to totalPris
    const [checkoutNumber, setCheckoutNumber] = useState(""); // Changed to checkoutNumber

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
        try {
            const product = produkter.find(prod => prod.id === id);
            if (!product) {
                console.error('Product not found');
                return;
            }

            await axios.put('http://localhost:3100/kjop', { id });

            setQuantities(prevQuantities => {
                const newQuantities = { ...prevQuantities, [id]: (prevQuantities[id] || 0) + 1 };
                updateTotalPris(newQuantities); // Changed function name
                return newQuantities;
            });

            fetchProdukter(); // Update the product list to reflect the decreased stock
        } catch (error) {
            console.error('Error purchasing product:', error);
        }
    };

    const updateTotalPris = (newQuantities) => { // Changed function name
        const newTotalPris = Object.keys(newQuantities).reduce((sum, id) => {
            const product = produkter.find(prod => prod.id === parseInt(id));
            return sum + (newQuantities[id] * (product ? product.Pris : 0));
        }, 0);
        setTotalPris(newTotalPris); // Changed variable name
    };

    const handleCheckout = () => {
        const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
        setCheckoutNumber(randomNumber.toString()); // Changed to string
        // Alert removed for clarity
    };

    return (
        <div>
            <h1>Kantine meny</h1>
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
                            <td>{produkt.Pris} Kr</td> {/* Added Kr next to the price */}
                            <td>
                                <button onClick={() => kjopProdukt(produkt.id)}>Kjøp</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleCheckout}>Checkout</button>
            <div>Total Pris: {totalPris} Kr</div> {/* Changed to Total Pris */}
            <div>Checkout Number: {checkoutNumber}</div> {/* Changed to Checkout Number */}
        </div>
    );
}

export default App;
