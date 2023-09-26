import { useState, useEffect } from 'react';


export default function Digitalclock() {

let clock = new Date();
let hh = clock.getHours()
let mm = clock.getMinutes();
let ss = clock.getSeconds();


const [currenTtime,newTime] = useState(new Date);


//useEffect fire when renders
useEffect (() => {

    let myInterval = setInterval(() => {
        
        newTime(new Date);

    }, 1000);

    return () => clearInterval(myInterval);

});


console.log(hh,mm,ss);

return (
<div className='app'>
    <header className='app-header'>
    <h1> {currenTtime.getHours()}:{currenTtime.getMinutes()}:{currenTtime.getSeconds()} </h1>

    </header>


</div>


)

}