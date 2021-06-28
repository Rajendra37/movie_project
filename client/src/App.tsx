import React,{useEffect} from 'react';
import logo from './logo.svg';
import './index.css';
import { Header } from './components/Header';
import{Switch,Route}from 'react-router-dom'
import { Login} from './components/Login';
import { Register } from './components/Register';
import {useDispatch} from 'react-redux'
import { Home } from './components/Home';
import { Logout } from './components/Logout';
import { DisplaySearch } from './components/DisplaySearch';
import { Details } from './components/Details';

function App() {
  return (<>
  <div>
  <Header/>
  </div>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/reg" component={Register}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/logout" component={Logout}></Route>
        {/* <Route path="/search/:data?" component={DisplaySearch}></Route> */}
        <Route path="/search" component={DisplaySearch}></Route>
        <Route exact path="/details/:id?" component={Details}></Route>
        <Route path="/details" component={Details}></Route>
      </Switch>
  
    </>
  );
}

export default App;
