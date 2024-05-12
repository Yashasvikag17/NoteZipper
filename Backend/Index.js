const express = require('express')
const notes = require("./Data/notes")
const dotenv = require('dotenv')
const app = express()
dotenv.config()

const port = process.env.port || 3000
app.get('/',(req,res) =>{
    res.send("hello ")
})

app.get("/api/notes" ,(req,res) =>{
    res.json(notes);
})

app.get('/api/notes/:id',(req,res) =>{
    try{
     const id = req.params.id;
     const result = notes.find((n)=> n._id === id)
     console.log(id);

     if(result){
        res.send(result)
     }
     else{
        res.status(404).send("Not found")
     }
    }
    catch(error){
         res.status(500).send("Internal sever error")
         console.log("Error occured");
    }
})

app.listen(port, () =>{
    console.log(`Server is runnning on port ${port}`);
})