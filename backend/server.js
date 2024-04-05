const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "signup"
})

db.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Database connection successful");
});


app.post('/signup',(req,res) => {
    const sql= "INSERT INTO login(`name`, `email`, `password`,`phone`) VALUES (?,?,?,?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.phone
    ]
    db.query(sql,values, (err,data)=> {
        if(err){
            console.error("Error executing query:",err);
            return res.json("Error");
        }
        console.log("Inserted data:", data);
        return res.json(data);
    })
    console.log("SQL Query:", sql);
    console.log(values);
    console.log(req.body); 
})

app.post('/login',(req,res) => {
    const sql="SELECT * FROM login WHERE `email` =? AND `password` =?";
    db.query(sql,[req.body.email,req.body.password], (err,data)=> {
        if(err){
            return res.json("Error");
        }
        if(data.length>0){
            return res.json("Success");
        }
        else{
            return res.json("Fail");
        }
    })
})
app.listen(8081, ()=> {
    console.log("listening");
})