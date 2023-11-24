import React from 'react';
import './App.css';
import Home from './Home';
import GDK from "./GDK"
import Layout from './layout';
import Login from './login';
import Norsk from './Norsk';
import KP from './KP';
import Heimkunskap from './Heimkunskap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/gdk" element={<GDK/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/norsk" element={<Norsk/>}/>
          <Route path="/kp" element={<KP/>}/>
          <Route path="/Heimkunskap" element={<Heimkunskap/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

