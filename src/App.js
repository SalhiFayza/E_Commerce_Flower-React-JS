
import './App.css';
import React,{Component} from 'react';
import Nav from './components/Nav.js';
import {BrowserRouter,Route} from 'react-router-dom';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Service from './components/Service.js'
import My from './components/My.js'
import Home from './components/Home.js'
class  App extends Component {
  render(){
  return (

    <BrowserRouter>
    <div className="App">
    <Nav/>

       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/portfolio" component={Portfolio}/>
       <Route exact path="/service" component={Service}/>
       <Route exact path="/my" component={My}/>

    </div>
      </BrowserRouter>
  );
}}

export default App;
