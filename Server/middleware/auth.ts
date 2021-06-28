import jwt from 'jsonwebtoken';
import user from '../models/Usermodels'


module.exports=(req:any,res:any,next:any)=>{
    const token=req.cookies.token;
    const verifytoken=jwt.verify(token,"RajendraGaikwad123456789",async(err,payload)=>{
            if(err)
            {
                return res.status(401).json({error:"you must be logged in...."})
            }
    const {email}=payload
    const myuser=await user.findOne({email})
    req.user=myuser;
    next();
    })
}