const express = require('express');

const fs = require('fs')

const app = express()

const port = process.env.PORT || 5000;



app.get('/student/studentList',(req,res) =>{
    fs.readFile('./API/user.json',"utf-8",(err,data) =>{
        
        if(err){
             
            console.log(err);
        }

        res.end(data);
  });
});


app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`)
})