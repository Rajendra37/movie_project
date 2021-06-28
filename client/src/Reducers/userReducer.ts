const initialData = {
  user: [],
  islogin: false,
  movies: [],
  searchedData: [{}],
  MovieById: {},
};

const userReducer = (state = initialData, action: any) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state, user: action.payload,
      };
    case "LOGIN-USER":
      return {
        ...state,islogin: action.payload,
      };
    case "ALL_MOVIES":
      return {
       ...state, movies: action.payload,
      };
    case "SERACHED_MOVIE":
      return {
        ...state, movies: action.payload,
      };
    case "MOVIE_BY_ID":
      return {
        ...state ,MovieById:action.payload
      };

      case"LOGOUT":
      return{
        ...state ,islogin:action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
