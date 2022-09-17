const express = require('express');
const app = express(); 
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cors = require('cors')


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "comment",
})



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))


app.get('/api/get',(req,res) => {
    const sqlSelect = "SELECT * FROM mytable";
    db.query (sqlSelect, (err,result)=>{
       res.send(result)
    })
   
});


app.post('/api/insert',(req, res) => {
    
    const body = req.body.body 
    const Username = req.body.Username 
    const userid = req.body.userid 
    const postId = req.body.postId 
    
    const sqlInsert = "INSERT INTO mytable (id,body, postId, userid ,userusername ) VALUES (33,?,?,?,?)";

    db.query (sqlInsert, [ body,postId,userid,Username], (err,result)=>{
    })
});

app.listen(3001, () => {
    console.log("running properly");
});