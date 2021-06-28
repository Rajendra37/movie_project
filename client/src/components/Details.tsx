import React,{useEffect,useState} from 'react'
import{movieById}from '../Actions/Action'
import {useParams,useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

export const Details = () => {
   
    const {id}=useParams<any>()
    const dispatch=useDispatch()    
    console.log(id);
    
     
    
    useEffect(() => { dispatch(movieById(id))},[])
    const movie =useSelector((state:any)=>state.userReducer.MovieById)
    console.log("movie",movie);
        
    let cardStyle={ "marginTop":"2%"}
    let buttonStyle={"margin":"10px"}
    let imgStyle={"padding":"20px"}
   
    return (
        <div className="container">

        
        <div className="details-Card">
        <div className="card mb-3" style={cardStyle}>
            <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={movie.Poster} width="100%" style={imgStyle} alt="..."/>
                             </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">{movie.Title}</h1>
                                    <h2 className="card-title">{movie.Genre}</h2>
                                    <h5 className="card-title">{movie.Year}</h5>
                                    <h6 className="card-title">{movie.imdbID}</h6>
                                    
                                    {/* <p className="card-text">{}</p> */}
                                </div>
                                {/* <button style={buttonStyle} className="btn" onClick={()=>deleteBook(state.selectedbook._id)}>Delete Book</button>
                                <button style={buttonStyle}className="btn" onClick={BackToHome}>Back To Home</button> */}
                            </div>
                       
                
                
                </div>
            </div>
        </div>
        </div>
    )
}
