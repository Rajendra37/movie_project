import React,{useEffect} from 'react'
import { useDispatch} from "react-redux";
import{UserLogout}from '../Actions/Action'
import {useHistory} from 'react-router-dom'

export const Logout = () => {
    const dispatch=useDispatch()
    const history=useHistory()    
    useEffect(() => {
        const chaeckLogout=async()=>{
            let response:any=await dispatch(UserLogout())
            console.log(response);
            
            if(response.status==200)
            {
              history.push('/')
            }
        }
        chaeckLogout()
    }, [])
    return (
        <div>
          
        </div>
    )
}
