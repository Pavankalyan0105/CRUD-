const mysql = require('mysql')
const express = require('express')
const cors = require('cors')


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;



var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pavan@123",
    database: "library", 
    insecureAuth : true
});

db.connect( (err) =>{
    if(err) console.log(err);
    console.log("DB connected");
})


app.post('/create', (req, res)=>{
    const regdno1 = req.body.regdno;
    const name1   = req.body.name;
    const branch1 = req.body.branch;
    const email1  = req.body.email;
    const phoneno1 = req.body.phoneno;
    
    console.log(regdno1 , name1 , branch1 , email1 , phoneno1);

    let query = `INSERT INTO students (name, email) VALUES (?, ?);`;
    db.query(query , [name1, email1] ,

    // db.query('INSERT INTO students(regdno , name, branch , phoneno ,email) VALUES(regdno, name , branch , phoneno , email)' , 
//    db.query('INSERT INTO `students` (regdno1 , name1 , branch1 , phoneno1 , email1) VALUES(regdno, name , branch , phoneno , email)', 

    (err, res) =>{
        
        if(err) console.log(err);
            // res.send("Submitted succesfully")
            console.log("Submitted succesfully");
        }
    )
    
})


app.listen(PORT , ()=>{
    console.log(`Server is up and running .. on ${PORT}`);
});
