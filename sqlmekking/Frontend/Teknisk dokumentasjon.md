# Avhengigheter
    express: Et enkelt Node.js web-rammeverk.
    node:path: Node.js-modul for å jobbe med filsystemstier.
    cors: Hack.
    axios: Promise-basert HTTP-klient for nettleseren og Node.js.
    bcrypt: Et bibliotek for kryptering av passord.
    react-router-dom: React-router-dom for nettleseren.
    nodemon: Verktøy som overvåker endringer i koden og starter serveren på nytt automatisk.

# serverconfig 
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 3000;
    const path = require("node:path");
    const cors = require('cors');
    const axios = require('axios');
    const bcrypt = require('bcrypt');
    const nodemon = require('nodemon');
    const { json } = require('express');

    app.use(cors()); // Aktiverer CORS-støtte
    app.use(express.static("build")); // Tjenestegjør statiske filer fra "build"-mappen

    // Starter serveren på angitt port med nodemon
    nodemon({
      script: 'server.js',
      ext: 'js'
    });

    // Starter serveren på angitt port uten nodemon
    // app.listen(port, () => {
    // console.log(`Server lytter på port ${port}`);
    // });

# Oppstart
Installer avhengigheter ved å kjøre npm install.
Start serveren ved å kjøre nodemon server.js eller npm start.

# express

## Installasjon
For å komme i gang, må du sørge for at Node.js og NPM er installert på systemet ditt. Deretter kan du opprette et nytt prosjekt og installere Express ved å kjøre følgende kommando i terminalen (express er installert i server mappen (backend)):

  | npm install express |

## Eksempel

    const express = require('express');
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
    res.send('Velkommen til Express-appen!');
    });

    app.listen(port, () => {
    console.log(`BBOP`);
    });

## Funksjonalitet
Jeg bruker express for å lage en enkel Node-server.

## Cors

### Installasjon

For å integrere cors i ditt Node.js-prosjekt, bruk følgende kommando i terminalen:

  | npm install cors |
    
### Eksempel

    const express = require('express');
    const cors = require('cors');
    const app = express();
    const port = 3000;

    app.use(cors());

### Funksjonalitet
Cors er en hack.

# Axios

## Installasjon
Axios er allerede inkludert som en avhengighet i prosjektet ditt, men hvis du vil installere den separat, kan du bruke følgende kommando i terminalen:

  | npm install axios |
    
## Eksempel

    import axios from 'axios';

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });

## Funksjonalitet
Axios brukes til å gjøre HTTP-forespørsler fra en nettleser eller Node.js.

# Bcrypt

## Installasjon
Bcrypt er allerede inkludert som en avhengighet i prosjektet ditt, men hvis du vil installere den separat, kan du bruke følgende kommando i terminalen:

  | npm install bcrypt |
    
## Eksempel

    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const myPlaintextPassword = 'sikkertpassord';

    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
      // Store hash in your password DB.
      console.log('Hashed Password:', hash);
    });

## Funksjonalitet
Bcrypt brukes til å kryptere passord før lagring i en database.

# React Router DOM

## Installasjon
React-router-dom er allerede inkludert som en avhengighet i prosjektet ditt, men hvis du vil installere den separat, kan du bruke følgende kommando i terminalen:

  | npm install react-router-dom |
    
## Eksempel

    import React from 'react';
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    import Home from './Home';
    import About from './About';
    import Contact from './Contact';

    function App() {
      return (
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      );
    }

## Funksjonalitet
React-router-dom brukes til å administrere ruting i en React-applikasjon på klientsiden.

## Spesiell takk

| Navn  | Lenke |
| ------------- | ------------- |
| Node  | [https://nodejs.org/en](https://nodejs.org/en)  |
| Git Bash | [https://gitforwindows.org](https://gitforwindows.org)  |
| NPM express  | [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)  |
| npm cors  | [https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors)  |
| npm axios  | [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)  |
| npm bcrypt  | [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)  |
| React Router DOM  | [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)  |
| Nodemon  | [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)  |

| Matheo Kant, GitHub: Matpankan  | OG låneside  |
| Vetle Fongen, GitHub: Frikk2015  | Hjalp med feilmeldinger  |
| Andreas Rovde, GitHub: Vet ikke  | Login  |
| Chen, GitHub: Vet ikke | SQL. (Jeg slettet det han gjorde senere)  |
