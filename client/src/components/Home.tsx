import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getAllMovies}from '../Actions/Action'
import { NavLink ,useHistory} from "react-router-dom";
import{movieById}from '../Actions/Action'
import Carousel from './Slider'

export const Home = () => {

    const dispatch=useDispatch()
   const history=useHistory()
   const[movieId,setmovieID]=useState('')
    const movies=useSelector((state:any)=>state.userReducer.movies)  
    let cardStyle={
        "width": "250px",
       "height": "450px" 
       }

       useEffect(() => {
        console.log("use effect is working...");
          dispatch(getAllMovies())
       }, [])

    return (<>
     <div className="container-img-fluid">       
            {movies.map((data:any)=>{
              
                return(
                <div className="card-div">
                    <div className="card" style={cardStyle}>
                        <img src={data.Poster} className="card-img-top" width="100%" height="60%"alt="..."/>
                            <div className="card-body">
                                <h6 className="card-title">{data.Title}</h6>
                                <p className="card-text">{data.Genre}</p>
                                <NavLink to={"/details/"+data._id}><button className="btn btn-dark">see details</button> </NavLink>   
                                {/* <button className="btn btn-dark" onClick={(e:any)=>{sendMovieDetails(data._id,e)}}>see details</button> */}
                            </div>
                      
                        </div>
                </div>
                )
               
            })}
                
                
        </div>
        </>
    )
}
