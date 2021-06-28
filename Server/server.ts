import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import env from "dotenv";
import cookieParser from 'cookie-parser';
import Router from './routes/routes'


function envConfigFunction() {
    env.config();
  }
  async function ConnectToDB() {
    const conStr = `mongodb://localhost:27017/Code_challenge`;
    console.log("Initalizing connection with DB");
  
    mongoose.connection.on("error", (error: any) => {
      console.log(`error in database ${error.message}`);
    })
    await mongoose.connect(conStr, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
      console.log("Connection initalized....");
}

function EnvirnmentSetup() {
    const server = express();
    server.use(express.static('../client/build'))
    server.use(cookieParser());
    server.use(cors({credentials:true,origin:'http://localhost:3000'}));
    server.use(express.json());
    return server;
  }


  const startServer = async () => {
    await ConnectToDB();
    const server =  EnvirnmentSetup();
    envConfigFunction();
    const serverStart = server.listen(process.env.PORT);
    serverStart.on("error", (error: any) => {
    console.log(`server error`, error.message); 
  });

  server.use(Router)
};
startServer()
  .then(() => console.log(`server started on port ${process.env.PORT}`))
  .catch((error: any) => {
    console.log(`error while starting of server ${error.message}`);
  });