import { useState } from 'react';
import './App.css';
import Select from './select';
import Update from './update';
import axios from 'axios';

export default function Home() {

  const [content, setContent] = useState(<Select />);

  function placeContentSelect() {

    setContent(<Select />);

  }

  function placeContentUpdate() {
    setContent(<Update />);
  }

  function placeContentInsert() {
   setContent(<Update />);
 }



  return (
    <div>
      <div className="buttonContainer">
        <button className='button' onClick={placeContentSelect}>Select</button>
        <button className='button' onClick={placeContentUpdate}>Update</button>
        <button className='button' onClick={placeContentInsert}>Insert</button>
      </div>
      <div className='requestContainer'>
        {content}
      </div>
    </div>
  );
}