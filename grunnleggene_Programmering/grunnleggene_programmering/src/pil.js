import {useState} from "react";
import './App.css';

function IncDecCounter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
   return(
    <>
    <h1 className="op6">Oppgave 6?</h1>
    <div className="col-xl-1">
    <div class="input-group">
  <div class="input-group-prepend">
    <button class="btn-outline-primary" type="button" onClick={incNum}><img src="https://www.freeiconspng.com/thumbs/up-arrow-png/black-up-arrow-png-6.png" width="30"/></button>
  </div>
  <input type="text" class="form-control" value={num} onChange={handleChange}/>
  <div class="input-group-prepend">
    <button class="btn-outline-primary" type="button" onClick={decNum}><img src="https://clipart-library.com/images_k/transparent-down-arrow/transparent-down-arrow-18.png" width="32"/></button>
  </div>
</div>
</div>
<h1 className='footer'></h1>
   </>
  );
}
export default IncDecCounter;