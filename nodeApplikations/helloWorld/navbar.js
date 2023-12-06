import './app.css';
 
export default function NavBar() {
 
    return(
        <div className="navbar">
            <div className='navbar-knapper'>
                <h1>SELECT</h1>
            </div>
            <div className='navbar-knapper'>
            <h1>UPDATE</h1>
            </div>
            <div className='navbar-knapper'>
            <h1>INSERT</h1>
            </div>
            <div className='navbar-knapper'>
            <h1>DELETE</h1>
            </div>
        </div>
    )
};