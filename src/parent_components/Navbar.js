import React from 'react'
import { Link } from 'react-router-dom';
import Routes from '../routes'
import { BrowserRouter as Router} from 'react-router-dom';
import DrawerNav from './DrawerNav';


function Navbar() {
    return (
        <div>
            <Router>
                    <div className="navbar">
                            <div className="logo-container">
                            <Link to='/' className="logo">CVD</Link>  
                            </div> 
                            <DrawerNav/>
                    </div>
              
                <Routes/>
            </Router>
        </div>
    )
}

export default Navbar
