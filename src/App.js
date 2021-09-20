import react from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/home.js';
import About from './components/about.js';
import Login from './components/login.js';

function App() {
  return (
    <Router>
      <h1>Welcome to Smartphone World</h1>
      <nav>
        <ul>
          <li>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
          <li>
            <Link to='/login' className='nav-link'>Login</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
