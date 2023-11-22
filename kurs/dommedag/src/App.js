
import './App.css';
import logo from './images/dromtorp-logo-no.png'
import login from './images/ppnb.png'


      const TopBar = () => {
  return (
    <div className="top-bar">
       <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        </div>
       <div className="login">
        <img src={login} alt="Login" className="login-image" />
        </div>

    </div>
  );
};


export default TopBar;
