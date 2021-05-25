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
    database:"library" , 
    insecureAuth : true
});

db.connect( (err) =>{
    if(err) console.log(err);
    console.log("DB connected");
})


app.post('/create', (req, res)=>{
    const regdno = req.body.regdno;
    const name   = req.body.name;
    const branch = req.body.branch;
    const email  = req.body.email;
    const phoneno = req.body.phoneno;
    
    console.log(regdno , name , branch , email , phoneno);

    // db.query('INSERT INTO students(regdno , name, branch , phoneno ,email) VALUES(regdno, name , branch , phoneno , email)' , 
    db.query('INSERT INTO students(regdno) VALUES("1223")', 

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
