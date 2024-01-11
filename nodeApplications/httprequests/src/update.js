import axios from "axios";
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
            axios
                .get(`http://localhost:81/updateuser/${elevId}/${fornavn}/${etternavn}/${datamaskinId}/${hobby}/${klasse}/${kjonn}/`)
                .then(response => {
                    setUpdateElvData(response.data);
                })
                .catch(error => console.log(error));
        };
        updateElevDatarequest();
        console.log(updateElevData);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <label>ElevID</label>
            <input type="number" value={elevId} onChange={e => setElevId(e.target.value)}/>
         <label>nyt Fornavn:</label>
            <input type="text" value={fornavn} onChange={e => setFornavn(e.target.value)}/>
         <label>nyt Etternavn: </label>
            <input type="text" value={etternavn} onChange={e => setEtternavn(e.target.value)}/>
        <label>Ny hobby: </label>
            <input type="text" value={hobby} onChange={e => setHobby(e.target.value)} placeholder="hobby"/>
         <label>Datamasikn ID: </label>
            <input type="number" value={datamaskinId} onChange={e => setDatamaskinId(e.target.value)}/>
         <label>Klasse: </label>
            <input type="number" value={klasse} onChange={e => setKlasse(e.target.value)}/>
         <label>Kjønn: </label>
            <input type="text" value={kjonn} onChange={e => setKjonn(e.target.value)}/>
            <input type="submit" value="Submit"/>
        </form>

        </>
        

    )
}