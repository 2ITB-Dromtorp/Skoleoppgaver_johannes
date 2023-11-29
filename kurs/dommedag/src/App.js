import React, { useContext, useState } from 'react';
import './App.css';
import Home from './Home';
import GDK from "./GDK"
import Layout from './layout';
import Login from './login';
import Norsk from './Norsk';
import KP from './KP';
import Heimkunskap from './Heimkunskap';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, LogContext} from './LoginPage';

const App = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("log") === "1");
  return (
    <LogContext.Provider value={[isLogin, setIsLogin]}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          
          <Route index element={isLogin ? (
            <Home/>
          ) : (
            <Navigate to="/login"/>
          )}/>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/gdk" element={<GDK/>}/>
          <Route path="/login" element={isLogin ? (
            <Navigate to="/"/>
          ) : (
            <Login/>
          )}/>
          <Route path="/norsk" element={<Norsk/>}/>
          <Route path="/kp" element={<KP/>}/>
          <Route path="/Heimkunskap" element={<Heimkunskap/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </LogContext.Provider>
  );
};

export default App;

