import { useEffect } from 'react';
import './content.css';
import axios from 'axios';

export default function Select() {

    useEffect(() => {

    axios
        .get("http://localhost:3002")
        .then(data => console.log(data.data))
        .catch(error => console.log(error));

}, []);
    return (
        <div className="container">
            Her kommer en tabell med select 
        </div>
    )
}