## express 


# instalasjon
For å komme i gang, må du sørge for at Node.js og NPM er installert på systemet ditt. Deretter kan du opprette et nytt prosjekt og installere Express ved å kjøre følgende kommando i terminalen (express er installert i server mappen (backend)):

npm install Express


#  eksempel

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Velkommen til Express-appen!');
});

app.listen(port, () => {
  console.log(`BBOP`);
});

# funksjonalitet
jeg bruker express for og lagge en enkel node server


## Cors



# Instalasjon

For å integrere cors i ditt Node.js-prosjekt, bruk følgende kommando i terminalen:

npm install cors

# eksempel

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());



# funksjonalitet
Cors er en hacks



## useffect



# eksempel 
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}




# fungsjon
usestate er en hook som opdateren en verdi og siden




## useEffect



# eksempel
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Function to update the timer every second
    const updateTimer = () => {
      setSeconds(prevSeconds => prevSeconds + 1);
    };

    // Set up an interval to call the updateTimer function every second
    const intervalId = setInterval(updateTimer, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run the effect only once after initial render

  return (
    <div>
      <h1>Timer:</h1>
      <p>{seconds} seconds</p>
    </div>
  );
}

export default Timer;

# funksjonalitet
opdatterer en verdi uten og opdattere siden 




## spesal thanks

Vetle fongen, github Frikk2015
hjalp med mulighet.no filstandar

Ahmad Murtaza Zahid, github Wanted1231232
quiz spørsmol

