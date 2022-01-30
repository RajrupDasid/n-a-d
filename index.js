
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{userNewUrlParser:true},()=>{
  console.log("db connected");
})


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/",(req,res)=>{
  res.send("welcome to home page")
})


app.listen(8000,()=>{
  console.log("Backend sever is running");
})
