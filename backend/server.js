const express=require('express')
const cors=require('cors')
// const mongoose=require('mongoose')
// const homerouter=require('./routes/homerouter')
// require('dotenv').config();
const app=express();
const port =5000;

app.use(cors())
app.use(express.json())
// const uri=process.env.uri
// mongoose.connect(uri,{useNewUrlParser:true})
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(port,()=>{
    console.log("runnig you better catch me")
})