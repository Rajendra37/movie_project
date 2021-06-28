import axios from "axios";
export const AddUser = (userdata: any) => async (dispatch: any) => {
  const response = await axios.post("/register", userdata);

  const serverData = await response.data;
  if (response.status == 201) {
    dispatch({ type: "ADD_USER", payload: serverData });
  }

  return response;
};

export const LoginUser = (logindata: any) => async (dispatch: any) => {
  const response = await axios.post("/login", logindata,{withCredentials:true});
  console.log("reg response", response);
  if (response.status == 200) {
    dispatch({ type: "LOGIN-USER", payload: true });
  }
  return response;
};


export const getAllMovies=()=>async(dispatch:any)=>{
  const response=await axios.get('/getmyMovies',{withCredentials:true})
  const movies=response.data
  dispatch({type:"ALL_MOVIES",payload:movies})
}


export const serachMovie=(title:any)=>async(dispatch:any)=>{
  let response= await axios.post('/mymovies/'+title)
  let searchedMovie=await response.data;
  console.log("search movie",searchedMovie);
  dispatch({type:"SERACHED_MOVIE",payload:searchedMovie})
  return response
}

export const MovieByImdbIDId=(id:any)=>async(dispatch:any)=>{
  const response=await axios.post('/MovieByImdbIDId/'+id)  
  const resMovie=await response.data; 
  dispatch({type:"MOVIE_BY_ID", payload:resMovie})
  return response
}

export const movieById=(id:any)=>async(dispatch:any)=>{
  const response=await axios.get('/movieById/'+id)  
  const resMovie=await response.data; 
  dispatch({type:"MOVIE_BY_ID", payload:resMovie})
  return response
}

export const UserLogout=()=>async(dispatch:any)=>{
  const response=await axios.get('/logout',{withCredentials:true})  
  dispatch({type:"LOGOUT", payload:false})
  return response
}
