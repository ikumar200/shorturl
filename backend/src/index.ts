import express from "express"

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.json("hi there")
})

app.listen(3000,()=>{
    console.log(`port is listening on 3000`);
})