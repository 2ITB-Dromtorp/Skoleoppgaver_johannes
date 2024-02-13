// RouteList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RouteList = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // Hent data fra API ved hjelp av Axios
    axios.get('https://api.entur.io/journey-planner/v2/graphql')
      .then(response => {
        setRoutes(response.data);
      })
      .catch(error => {
        console.error('Feil ved henting av rutedata:', error);
      });
  }, []); // Tomt avhengighetsarray for å kjøre effekten kun ved mount

  return (
    <div>
      <h2>Ruter</h2>
      <ul>
        {routes.map(route => (
          <li key={route.id}>
            {route.name} - {route.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteList;
