import mongoose, { Document } from "mongoose";

const MovieSchema = new mongoose.Schema({
    Title: {
      type: String,
      
    },
    Year: {
      type: String,
     
    },
    Poster: {
      type: String,
     
    },
    imdbID: {
        type: String,
        unique:true
      
      },
      Genre:{
        type: String,
      }

  });
const movieModel: any = mongoose.model("movie", MovieSchema);
export default movieModel;