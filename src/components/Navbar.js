import React from 'react'
import { Link } from 'react-router-dom';
import Routes from '../routes'
import { BrowserRouter as Router} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Router>
                <div>
                    <div className="navbar">
                            <div className="logo-container">
                            <Link to='/' className="logo">CVD</Link>  
                            </div> 
                            <div className="nav-item">
                            <Link to='/' className="nav-item">Home</Link> 
                            <Link to='/about' className="nav-item">About</Link>
                            <Link to='/login' className="nav-item">Log In</Link>
                            </div>
                              
                    </div>
                </div>
                <Routes/>
            </Router>
        </div>
    )
}

export default Navbar
