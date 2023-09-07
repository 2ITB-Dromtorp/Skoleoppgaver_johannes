import { useState } from 'react';


function op3() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
        <div>
        <h1>are you Swedish or Norweigan</h1>
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
      </div>
    )
  }






export default function op3;