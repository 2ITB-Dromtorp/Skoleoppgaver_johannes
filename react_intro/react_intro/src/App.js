
import './App.css';
import MyButton from './mybutton';
import Profile from './imageEx';






// Dette er en kommentar

function App() {

  let isLoggedIn;
  let content = <h1> Overskrift </h1>;
  isLoggedIn = true;

  if (isLoggedIn) {
    content = <MyButton />;
  } else {
    content = <Profile />;
  }


  return (
    
    <div className="App">
      <header className="App-header">
        
        <h1>pliz</h1>
        
        {content}

      </header>
    </div>
  );
}

export default App;
