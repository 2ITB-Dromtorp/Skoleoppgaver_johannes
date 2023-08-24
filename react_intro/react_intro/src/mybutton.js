import './App.css';

function HelloWorld() {
    console.log('Hello World')
     
  }

  export default function MyButton() {
    return (
      <div className="MyApp">
        <h1>Welcome to my app</h1>
        <button className='button' onClick={HelloWorld}>I'm a button</button>
      </div>
    );
  }

  