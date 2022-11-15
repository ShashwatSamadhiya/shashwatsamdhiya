const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

var otp=0;

app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
})

app.post("/verify",(req,res)=>{

    otp = Math.floor((Math.random()*1000000)+1);
    console.log(otp);
    res.sendFile(__dirname+"/verify.html");
    setTimeout(()=>{
        otp=0;
    },60000);
})

app.post("/auth",(req,res)=>{
    if(req.body.OTP==otp) res.sendFile(__dirname+"/home.html");
    else res.sendFile(__dirname+"/failure.html");
})

let port=8080;
app.listen(port,()=> {
    console.log(`Server started on port http://localhost:${port}`);
  })
