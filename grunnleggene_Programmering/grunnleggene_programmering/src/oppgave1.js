import logo from './logo.svg';
import './App.css';
import './index.js';


function A() {
  return (
    <div className='oppgavebox1'>
      <h2>Dellopgave 1 a)</h2>
      <p>spørsmål: hva skriver du i Javascrip dersom du vil he variablen test verdi 8? hvilkjen datta type er dette?</p>
      <p>svar: let test = 8;</p>
    </div>
  );
}

function B() {
  return (
    <div className='oppgavebox1'>
      <h2>Dellopgave 1 B)</h2>
      <p>spørsmål: hva skriver du dersom du vi gi variabel test verdi "testverdi"?</p>
      <p>svar: var test = "testverdi";</p>
    </div>
  );
}

function C() {
  return (
    <div className='oppgavebox1'>
      <h2>Dellopgave 1 C)</h2>
      <p></p>
      <p>svar: var test = "testverdi";</p>
    </div>
  );
}


function D() {
  return (
    <div className='oppgavebox1'>
      <h2>Dellopgave 1 D)</h2>
      <p>Hva skriver du dersom du vil regne ut 2 * 3 og sette resultanene inn variabl product?</p>
      <p>var product = 2 * 3;</p>
    </div>
  );
}


function E() {
  return (
    <div className='oppgavebox1'>
      <h2>Dellopgave 1 E)</h2>
      <p>hva skriver du dersom du vil regne ut verdien av broken 2/3 og sett resultatene in i varibalen broek?</p>
      <p>svar: var broek = 2 / 3;;</p>
    </div>
  );
}


export default function Oppgave1() {
  return (
    <div>
      <h1>Oppgave 1</h1>
      <header className='App-header'>
        <A />
        <B/>
        <C/>
        <D/>
        <E/>
      </header>
    </div>
  );
}


