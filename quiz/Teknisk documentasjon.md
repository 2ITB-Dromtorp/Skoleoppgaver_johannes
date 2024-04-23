## index.js (backend)




# Avhengigheter
    express: Et enkelt Node.js web-rammeverk.
    node:path: Node.js-modul for å jobbe med filsystemstier.
    ./answers: En lokal JSON-fil som inneholder spørsmål og svar.
    cors: hack.


    # serverconfig 
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 3000;
    const path = require("node:path");
    const json = require('./answers');
    var cors = require('cors');

    app.use(cors()); // Aktiverer CORS-støtte
    app.use(express.static("build")); // Tjenestegjør statiske filer fra "build"-mappen

    // Starter serveren på angitt port
    app.listen(port, () => {
    console.log(`Server lytter på port ${port}`);
    });



# Endepunkter
GET /:questionnumber: Håndterer forespørsler for å hente spørsmål basert på et spørsmålsnummer. Hvis questionnumber er større enn 3, velges et tilfeldig tall mellom 0 og 3. Svarer med JSON-data for det valgte spørsmålet.


    app.get('/:questionnumber', (req, res) => {
    let questionnumber = Math.min(Number(req.params.questionnumber), 3);
    res.send(JSON.stringify(json.quiz.questions[questionnumber]));
    }); 


GET: Håndterer alle andre forespørsler og sender React-appens index.html-fil.

    app.get('*', (req, res) => {
    res.sendFile(path.resolve("./build/index.html"));
    });


# Oppstart
Installer avhengigheter ved å kjøre npm install.
Start serveren ved å kjøre node server.js eller npm start.



## quiz.js


# importerte moduler
    import React, { useState, useEffect } from 'react';
    import './App.css';

React: code mekker.
useState: En React-hook som oppdaterer en verdi og reloader siden.
useEffect: En React-hook som opdater siden uten og reloade den.
'./App.css': fillen som styler siden.


# quiz komponenter
const Quiz = () => {
  // Tilstander som håndterer quizdata, nåværende spørsmål, poeng, resultatvisning og timer.
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(30); // Hvor mange sekunder man har

  // Effekt for å hente quizdata fra serveren basert på nåværende spørsmålsnummer.
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(`/${currentQuestion}`);
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, [currentQuestion]);

  // Effekt for å håndtere timer og sjekke når quizen er ferdig.
  useEffect(() => {
    if (quizData && quizData.options) {
      const intervalId = setInterval(() => {
        // Logikk for timeren
        // ...
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [quizData]);

  // Effekt for å sjekke om quizen er fullført.
  useEffect(() => {
    // Logikk for å sjekke om quizen er fullført
    // ...
  }, [currentQuestion, quizData, showResult]);

  // Håndterer klikk på svaralternativer.
  const handleAnswerClick = (selectedOption) => {
    // Logikk for å håndtere svarklikk og oppdatere poeng og spørsmål.
    // ...
  };

  // Tilbakestiller quizen for å starte på nytt.
  const resetQuiz = () => {
    // Logikk for å tilbakestille quizen
    // ...
  };

  // JSX for å representere quizkomponenten.
  return (
    <div className="quiz-container">
      {quizData === null ? (
        <p>Loading quiz...</p>
      ) : showResult ? (
        <div className="result-container">
          {/* JSX for å vise resultatet etter quizen er fullført */}
          {/* ... */}
        </div>
      ) : (
        <div className="question-container">
          {/* JSX for å vise spørsmål, timer og svaralternativer */}
          {/* ... */}
        </div>
      )}
    </div>
  );
};

export default Quiz;


# Oppsummering
Tilstander:

quizData: Henter spørsmålsdata fra serveren.
currentQuestion: Holder styr på nåværende spørsmål.
score: Holder styr på poengsummen.
showResult: Indikerer om resultatet skal vises.
timer: Holder styr på gjenværende tid.
Effekter:

Hente Quizdata: Henter quizdata fra serveren basert på nåværende spørsmålsnummer.
Timer og Resultat: Håndterer timer og sjekker om quizen er ferdig.
Sjekk om Fullført: Sjekker om quizen er fullført.
Håndtering av Klikk:

handleAnswerClick: Håndterer klikk på svaralternativer og oppdaterer tilstanden.
Tilbakestilling:

resetQuiz: Tilbakestiller quizen for å starte på nytt.
Visning av JSX:

Viser ulike deler av JSX basert på tilstanden til quizen (lasting, resultat eller spørsmål).






## express 


# instalasjon
For å komme i gang, må du sørge for at Node.js og NPM er installert på systemet ditt. Deretter kan du opprette et nytt prosjekt og installere Express ved å kjøre følgende kommando i terminalen (express er installert i server mappen (backend)):

  | npm install Express |


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

  | npm install cors |
    

# eksempel

    const express = require('express');
    const cors = require('cors');
    const app = express();
    const port = 3000;

    app.use(cors());



# funksjonalitet
Cors er en hack



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



| Navn  | lenke |
| ------------- | ------------- |
| node  | https://nodejs.org/en  |
|  Git Bash | https://gitforwindows.org  |
| NPM express  | https://www.npmjs.com/package/express  |
| npm cors  | https://www.npmjs.com/package/cors  |
| Vetle fongen, github Frikk2015  | hjalp med mulighet.no filstandar  |
| Ahmad Murtaza Zahid, github Wanted1231232  | quiz spørsmol  |

