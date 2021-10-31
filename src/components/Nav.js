import React from 'react';
import './Nav.css';
import logo from './logo.png';
import About from './/About.js';
import Portfolio from './Portfolio.js';
import Service from './Service.js';
import My from './My.js';
import Home from './Home.js'
const Nav = () => {
    return ( <div className = "hero" >
        <nav >
        <img src = { logo } alt = ""  className = "logo" / >
        <ul >
        <li > < a href = "/" > Home < /a></li >
        <li > < a href = "/about" > Products < /a></li >
        <li > < a href = "/portfolio" > Portfolio < /a></li >
        <li > < a href = "/service" > Services < /a></li >
        <li > < a href = "/my" > Hire Me < /a></li >
        </ul> < /nav > </div>
    )
}
export default Nav;
