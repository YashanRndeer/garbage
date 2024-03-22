import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import mongoose from "mongoose"; 
import authRoutes from "./routes/auth";

const app = express();

app.use(bodyParser.json());
app.use(cors());


// app.use("/user",authRoutes)

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
  });



app.listen((8080  , ()=>{
    console.log("connected on 8080")
}))