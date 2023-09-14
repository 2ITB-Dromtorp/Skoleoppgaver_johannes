import logo from './logo.svg';

import './App.css';

import Oppgave1 from './oppgave1';
import Oppgave2 from './oppgave2a';
import Treangel from './oppgave2b';
import Arial from './oppgave2c';
import Norsk from './oppgave 3';
import Guess from './oppgave 4';
import Op5 from './oppgave 5';
import Incdec from './pil';
 

function App() {

  return (

    <div className="App">

      <header className="App-header">
        <Oppgave1/>
        <Oppgave2/>
        <Treangel/>
        <Arial/>
        <Norsk/>
        <Guess/>
        <Op5/>
        <Incdec/>


      

      </header>

    </div>

  );

}

 

export default App;