import axios from "axios";
import { useState } from "react";

export default function Create() {
  const [fornavn, setFornavn] = useState("");
  const [etternavn, setEtternavn] = useState("");
  const [hobby, setHobby] = useState("");
  const [datamaskinID, setDatamaskinId] = useState("");
  const [klasse, setKlasse] = useState("");
  const [kjonn, setKjonn] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newElevData = {
      fornavn,
      etternavn,
      hobby,
      datamaskinID,
      klasse,
      kjonn,
    };

    axios
      .post("http://localhost:81/createuser", newElevData)
      .then((response) => {
        console.log("New record created:", response.data);
        // Optionally, you can clear the form after successful submission
        setFornavn("");
        setEtternavn("");
        setHobby("");
        setDatamaskinId("");
        setKlasse("");
        setKjonn("");
      })
      .catch((error) => console.error("Error creating new record:", error));
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Insert</h2>
        <label>Nytt Fornavn:</label>
        <input
          type="text"
          value={fornavn}
          onChange={(e) => setFornavn(e.target.value)}
          placeholder="Fornavn"
        />
       <label>nyt Etternavn: </label>
            <input type="text" value={etternavn} onChange={e => setEtternavn(e.target.value)}placeholder="Etternav"/>
        <label>Ny hobby: </label>
            <input type="text" value={hobby} onChange={e => setHobby(e.target.value)} placeholder="Hobby"/>
         <label>Datamasikn ID: </label>
            <input type="number" value={datamaskinID} onChange={e => setDatamaskinId(e.target.value)} placeholder="Datamatatik ID"/>
         <label>Klasse: </label>
            <input type="number" value={klasse} onChange={e => setKlasse(e.target.value)} placeholder="Klasse"/>
         <label>Kjønn: </label>
            <input type="text" value={kjonn} onChange={e => setKjonn(e.target.value)} placeholder="Kjønn"/>
            <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
