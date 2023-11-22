// TopBar.js

import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling
import logo from './images/dromtorp-logo-no.png';
import login from './images/ppnb.png';
import Popup from './popup';

const TopBar = () => {
  const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);
  const [isBox1PopupVisible, setIsBox1PopupVisible] = useState(false);
  const [isBox2PopupVisible, setIsBox2PopupVisible] = useState(false);
  const [isBox3PopupVisible, setIsBox3PopupVisible] = useState(false);
  const [isBox4PopupVisible, setIsBox4PopupVisible] = useState(false);

  const openLoginPopup = () => {
    setIsLoginPopupVisible(true);
  };

  const openBox1Popup = () => {
    setIsBox1PopupVisible(true);
  };

  const openBox2Popup = () => {
    setIsBox2PopupVisible(true);
  };

  const openBox3Popup = () => {
    setIsBox3PopupVisible(true);
  };

  const openBox4Popup = () => {
    setIsBox4PopupVisible(true);
  };

  const closePopup = () => {
    setIsLoginPopupVisible(false);
    setIsBox1PopupVisible(false);
    setIsBox2PopupVisible(false);
    setIsBox3PopupVisible(false);
    setIsBox4PopupVisible(false);
  };

  return (
    <div>
      <div className="top-bar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        
        <div className="login" onClick={openLoginPopup}>
          <img src={login} alt="Login" className="login-image" />
        </div>
        </div>
  
      <div className="boxes-container">
        <div className="box1" onClick={openBox1Popup}>
        <h3>Grunlegende Data kunskap</h3>
        </div>

        <div className="box2" onClick={openBox2Popup}>
        <h3>Norsk</h3>
        </div>

        <div className="box3" onClick={openBox3Popup}>
        <h3>Heimkunskap</h3>
        </div>

        <div className="box4" onClick={openBox4Popup}>
        <h3>Kroppsøving</h3>
        </div>
      </div>
     

      {isLoginPopupVisible && (
        <Popup onClose={closePopup} content={<div>Dachshund</div>} />
      )}

      {isBox1PopupVisible && (
        <Popup onClose={closePopup} content={
          <div>
        <h1>Grunlegende Data kunskap</h1>
        <p>Luctus venenatis lectus magna fringilla urna porttitor. Semper eget duis at tellus at. Arcu odio ut sem nulla pharetra diam. Placerat orci nulla pellentesque dignissim enim sit. Augue ut lectus arcu bibendum at varius vel pharetra vel. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Est ante in nibh mauris cursus mattis molestie a iaculis. Elementum sagittis vitae et leo duis ut. Placerat vestibulum lectus mauris ultrices eros. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus.</p>
        </div>
      }  />
      )}

      {isBox2PopupVisible && (
        <Popup onClose={closePopup} content={<div>
          <h1>Norsk</h1>
          <p>Viverra maecenas accumsan lacus vel. Nisi quis eleifend quam adipiscing vitae proin sagittis. Vulputate dignissim suspendisse in est ante in nibh mauris. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Felis eget velit aliquet sagittis id consectetur purus ut. Nisi lacus sed viverra tellus in. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Senectus et netus et malesuada fames ac turpis. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Aenean euismod elementum nisi quis eleifend quam. Ac tortor vitae purus faucibus ornare suspendisse. Fringilla phasellus</p>
        </div>} />
      )}

      {isBox3PopupVisible && (
        <Popup onClose={closePopup} content={<div>
          <h1>Heimkunskap</h1>
          <p></p>
        </div>} />
      )}

      {isBox4PopupVisible && (
        <Popup onClose={closePopup} content={<div>
          <h1>Kroppsøving</h1>
          <p></p>
        </div>} />
      )}
    </div>
  );
};

export default TopBar;
