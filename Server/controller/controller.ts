import express from "express";
import userModel from "../models/Usermodels";
import movie from "../models/movieModel";
import bcrypt from "bcrypt";
import axios from "axios";
import jwt from "jsonwebtoken";

const adduser = async (req: any, res: any) => {
  const { Name, email, password } = req.body;
  if (!Name || !email || !password) {
    return res.status(401).send({ error: "plz filled the field" });
  }

  try {
    const userExist = await userModel.findOne({ email: email });
    if (userExist) {
      return res.status(422).send({ message: "email already present" });
    }

    const RegUser = new userModel({ Name, email, password });
    await RegUser.save();
    res.status(201).send(RegUser);
  } catch (error) {
    res.status(400).send(error);
  }
};
const loginUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "plz filled the field..." });
    }

    let userLogin = await userModel.findOne({ email: email });
    if (userLogin) {
      let isMatch = await bcrypt.compare(password, userLogin.password);
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Cridentilas..." });
      } else {
        const token = await userLogin.genratetoken();
        res.cookie("token", token, { expires: new Date(Date.now() + 360000) });
        res.status(200).json({ name: userLogin.Name, email: userLogin.email });
      }
    } else {
      res.status(400).json({ error: "Invalid Cridentilas..." });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getmovie = async (req: any, res: any) => {
  try {
    const { title } = req.params;
    let newtitle = new RegExp(title, "i");
    const searchedData = await movie.find({ Title: newtitle });
    console.log("...", searchedData.length);

    if (searchedData.length == 0) {
      console.log("inside searched data");
      console.log("title", title);
      let movies = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=e55b1f23&s=${title}`
      );

      let myMovie = await movies.data;
      await movie.insertMany(myMovie.Search);
      res.status(200).send(myMovie.Search);
    } else {
      res.status(200).send(searchedData);
    }
  } catch (error) {
    // console.log(error);
    res.status(400).send();
  }
};

const getAllMovies = async (req: any, res: any) => {
  try {
    let moviedata = await movie.find().limit(4);
    res.send(moviedata);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getMovieByImdbIDId = async (req: any, res: any) => {
  try {
    const {id}=req.params;
    let Newmovie = await movie.findOne({ imdbID:id });
    if(!Newmovie)
    {
      let movieByIMdb = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=e55b1f23`);
      let myMovie = await movieByIMdb.data;
      // await movie.insertOne(myMovie);
      res.status(200).send(myMovie);
    }
    res.status(200).send(Newmovie);
  } catch (error) {
    console.log(error);
    
    res.status(400).send(error);
  }
};

const getMovieById = async (req: any, res: any) => {
  try {
    let Newmovie = await movie.findOne({ _id:req.params.id });
    res.status(200).send(Newmovie);
  } catch (error) {
    res.status(400).send(error);
  }
};

const logout = async (req: any, res: any) => {
  try {
    res.clearCookie("token", { path: "/" });
    res.status(200).json({ message: "logout" });
  } catch (error) {
    res.status(400).json({ error: "something wrong happened..." });
  }
};

const userVerify = async (req: any, res: any) => {
  try {
    jwt.verify(req.cookies.token, "RajendraGaikwad123456789", (error) => {
      if (!error) {
        res.status(200).send();
      } else {
        res.status(401).send();
      }
    });
  } catch (error) {
    res.status(401).send(error);
  }
};

export default {
  adduser,
  loginUser,
  getmovie,
  getAllMovies,
  getMovieById,
  logout,
  userVerify,
  getMovieByImdbIDId
};
