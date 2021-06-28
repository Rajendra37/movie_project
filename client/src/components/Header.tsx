import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink,useHistory } from "react-router-dom";
import {serachMovie,MovieByImdbIDId}from '../Actions/Action'
import { DisplaySearch } from "./DisplaySearch";

export const Header = () => {

  const dispatch=useDispatch()
  const history=useHistory()
  const [search, setsearch] = useState('')
  const [tagvalue, setTagvalue] = useState('')
  const LoginState = useSelector((login: any) => login.userReducer.islogin);
  const renderLinks = () => {
    if (LoginState == false) {
      return [
        <>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link text-light">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/reg" className="nav-link text-light">
              Register
            </NavLink>
          </li>
        </>,
      ];
    } else {
      return [
        <>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link text-light">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/logout" className="nav-link text-light">
              Logout
            </NavLink>
          </li>
        </>,
      ];
    }
  };


  const submitsearchData=async(e:any)=>{
    e.preventDefault()
    let option=tagvalue;
    let keyword=search;
    if(option=='title')
    {
     let response:any = await dispatch(serachMovie(keyword))
        if(response.status==200)
        {
          history.push('/search')
        }
    }
    else if(option=="ImdbId")
    {
        let response:any=await dispatch(MovieByImdbIDId(search))
        if(response.status==200)
        {
          history.push('/details')
        }
    }
  
  }

  const selectvalue = (e: any) => {
    setTagvalue(e.target.value)
}
  return (
    <div>
      <div className="NavBar-class">
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
          <a className="navbar-brand text-light" href="#">
            CODE CHALLENGE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
              <select className="custom-select w-25" id="inputGroupSelect01"onChange={selectvalue}>
                      <option selected>Choose...</option>
                      <option value="title">General Search By Title</option>
                      <option value="ImdbId">Search By ImDbID</option>
                </select>
            <form className="form-inline my-2 my-lg-0 search" onSubmit={submitsearchData}>
            <input className="form-control mr-sm-2" type="search" onChange={(e)=>{setsearch(e.target.value)}} placeholder="search"/>
            {/* <NavLink to={"/search/"+search}> <button className="btn my-2 my-sm-0 btn-light" type="submit">Search</button></NavLink> */}
            <button className="btn my-2 my-sm-0 btn-light" type="submit">Search</button>
              </form>
              <ul className="navbar-nav ml-auto">{renderLinks()}</ul>
           
          </div>

        </nav>
      </div>
    </div>
  );
};
