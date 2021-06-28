import React,{useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {serachMovie}from '../Actions/Action'

export const DisplaySearch = () => {
    const dispatch=useDispatch()
    // const {data}=useParams<any>()
    // console.log("my data",data)
    const movies=useSelector((state:any)=>state.userReducer.movies)
    console.log(movies);
      
    let cardStyle={
        "width": "250px",
       "height": "450px" 
       }

    //    useEffect(() => {
    //       dispatch(serachMovie(data))
    //    }, [])
         
    return (
        <div className="container-img-fluid">
            {movies.map((data:any)=>{
                return(
                <div className="card-div">
                    <div className="card" style={cardStyle}>
                        <img src={data.Poster} className="card-img-top" width="100%" height="60%"alt="..."/>
                            <div className="card-body">
                                <h6 className="card-title">{data.Title}</h6>
                                <p className="card-text">{data.Genre}</p>
                                <button className="btn btn-dark">see details</button>                            
                            </div>
                      
                        </div>
                </div>
                )
            })}
                
                
        </div>
    )
}
