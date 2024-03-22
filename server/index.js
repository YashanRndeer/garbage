import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import mongoose from "mongoose"; 
import User from "./models/user.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const isEmptyValidator = (value) => {
   
  let emptyCount = 0;
  for(const element of value){
      if(element ==="" || element === null){
          emptyCount ++;
          
      }
  }
  if(emptyCount===0){
      return false;
  }else{
      return true;
  }

};


const app = express();

app.use(bodyParser.json());
app.use(cors());


// app.use("/user",authRoutes)

app.get( "/user",async(req,res) =>{
  res.json({message:"this is get user"})
})

app.post("/user_reg", async(req,res)=>{
    console.log("request for signup",req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const mobile = req.body.mobile;
    const city = req.body.city;

    if(isEmptyValidator(username,email,password,confirmPassword,mobile,city)){
      res.status(400).json({
        message:"all filed should be filled"
      })
    }

    if(password !==confirmPassword){
      res.status(400).json({
        message:"confirm password and password should be matched !"
      })
    }

    try{
      
     let exsistUserCount = await User.countDocuments({email:email});

     if(exsistUserCount !==0){
      res.status(400).json({message:"This user exsist"})
     }

     const hashedPassowrd = await bcrypt.hash(password, 12);

     let user= new User({
      username:username,
      password:hashedPassowrd,
      email:email,
      mobile:mobile,
      city:city
     });

     let newUser = await user.save();
     res.status(200).json({
      message:"user creation successfull !!",
      details:newUser
     })

    }catch(err){
      console.log("sign up error",err);
    }


    
})

app.post("/user_login",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(isEmptyValidator([username,password])){
      res.status(400).json({
        message:"username or password cannot be empty"
      })
    };

    let existUser;

    try{
      existUser = await User.findOne({username:username});
      if(!existUser){
        res.send(404).json({message:"This user does not exsist"});

      }

      console.log("exsist user",existUser.username,existUser.password)

      let comparePassword = await bcrypt.compare(password,existUser.password);
      console.log("compared password",comparePassword)
      if(!comparePassword){
        res.send(400).json({
          message:"Invalid password try again"
        });
      }


      const token = jwt.sign(
        {
        username:existUser.username,
        email:existUser.email,
        userId:existUser._id.toString()
        },"supersecretforthisproject"
      )

      res.status(200).json({
        message:"user login successfull",
        token:token
      })

    }catch(err){
      console.log(err)
    }

    // console.log("body login",username,password)
})



try {
  mongoose.connect(
    "mongodb+srv://thisalkamihisara9900:RnJlPoN237mq8toO@cluster0.qgzcmt3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  app.listen(8080, () => {
    console.log("connected to 8080");
  });
} catch (err) {
  console.log("mongoose error", err);
}