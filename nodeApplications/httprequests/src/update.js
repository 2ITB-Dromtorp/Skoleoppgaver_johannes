import axios from "axios";
import './App.css';
import { useState, useEffect } from "react";
export default function Update() {

    const [updateElevData, setUpdateElvData] = useState([])
    const [elevId, setElevId] = useState("")
    const [fornavn, setFornavn] = useState("")
    const [etternavn, setEtternavn] = useState("")
    const [hobby, setHobby] = useState("");
    const [datamaskinId, setDatamaskinId] = useState("");
    const [klasse, setKlasse] = useState("");
    const [kjonn, setKjonn] = useState("");

    function handleSubmit(event) {

        event.preventDefault();
        console.log('submitted');



        const updateElevDatarequest = () => {
            axios.post(`http://localhost:81/updateuser/`, {
                    elevId,
                    fornavn,
                    etternavn,
                    hobby,
                    datamaskinId,
                    klasse,
                    kjonn,
                }).then(response => {
                    setUpdateElvData(response.data);
                }).catch(error => console.log(error));
        };
        updateElevDatarequest();
        console.log(updateElevData);
    }

    return (
        <>
            <div class="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Update</h2>
                    <label>ElevID</label>
                    <input type="number" value={elevId} onChange={e => setElevId(e.target.value)} placeholder="ElevID" />
                    <label>nyt Fornavn:</label>
                    <input type="text" value={fornavn} onChange={e => setFornavn(e.target.value)} placeholder="Fornavn" />
                    <label>nyt Etternavn: </label>
                    <input type="text" value={etternavn} onChange={e => setEtternavn(e.target.value)} placeholder="Etternav" />
                    <label>Ny hobby: </label>
                    <input type="text" value={hobby} onChange={e => setHobby(e.target.value)} placeholder="Hobby" />
                    <label>Datamasikn ID: </label>
                    <input type="number" value={datamaskinId} onChange={e => setDatamaskinId(e.target.value)} placeholder="Datamatatik ID" />
                    <label>Klasse: </label>
                    <input type="number" value={klasse} onChange={e => setKlasse(e.target.value)} placeholder="Klasse" />
                    <label>Kjønn: </label>
                    <input type="text" value={kjonn} onChange={e => setKjonn(e.target.value)} placeholder="Kjønn" />
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>

        </>


    )
}