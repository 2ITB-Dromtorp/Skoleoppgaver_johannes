import React, { useEffect, useState } from "react";
import axios from "axios";
import './table_style.css';

export default function Select() {
    const [elevData, setElevData] = useState([]);
    const [newRow, setNewRow] = useState({
        ElevID: '',
        Fornavn: '',
        Etternavn: '',
        DatamaskinID: '',
        Hobby: '',
        Klasse: '',
        Kjonn: '',
    });

    useEffect(() => {
        getElevData();
    }, []);

    const getElevData = () => {
        axios
            .get("http://localhost:81/")
            .then(response => {
                setElevData(response.data);
            })
            .catch(error => console.log(error));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRow(prevRow => ({ ...prevRow, [name]: value }));
    };


    const updateHobby = (newHobby, elevId) => {
        axios
            .get(`http://localhost:81/updateuser/${newHobby}/${elevId}`)
            .then(response => {
                console.log(response.data);
                // You might want to update the state or perform other actions after the update
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <div className="table-container">
                <table className="styled-table">
                    {/* ... (unchanged part of the table) */}
                </table>
            </div>
            {/* Display the new row form */}
            
            {/* Display the update hobby form */}
            <div>
                <input type="text" name="ElevIDToUpdate" placeholder="ElevID to Update" />
                <input type="text" name="NewHobby" placeholder="New Hobby" />
                <button onClick={() => updateHobby(newRow.Hobby, newRow.ElevID)}>Update Hobby</button>
            </div>
        </>
    );
}
