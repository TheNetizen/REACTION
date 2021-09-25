import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './App.css'
import Login from './components/Login.js'
import Register from './components/Register.js'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiTwotoneTags } from "react-icons/ai";

import Landing from './components/Landing';


class App extends React.Component {
        render() {
                return(<Router>
                <React.Fragment>
                <div className="box">
                <nav className="navbar navbar-expand-lg grad">
                 <a className="navbar-brand" href="/" style={{color:'white', marginLeft:'100px'}}><AiTwotoneTags />Nimbus-2001</a>
                 <ul className="navbar-nav ms-auto" style={{marginRight:"100px"}}>
                         <li className="nav-item ">
                        <Link to="/home"className="navbar-link" >Home</Link>
                         </li>
                         <li className="nav-item">
                        <a className="navbar-link" href="/ListOfServices">List of Services</a>
                         </li>
                         <li className="nav-item ">
                        <Link to="/login" className="navbar-link" >Login</Link>
                       
                         </li>
                 </ul>
                </nav>
                <Route exact path ='/' component={Landing}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/home" component={Landing}></Route>
                <Route path='/register' component={Register}></Route>
                <footer><FaTwitter style={{margin:"4px",fontSize:"4vh"}} /><FaFacebook style={{margin:"4px",fontSize:"4vh"}} /><FaWhatsapp style={{margin:"4px",fontSize:"4vh"}} /></footer>
                </div>
                </React.Fragment>
                </Router>)
        }
};
export default App;

