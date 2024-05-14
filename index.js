const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({                                                  
	"host" : "sql6.freesqldatabase.com",
	"user" : "sql6705587",
	"password" : "Vt3MWhT9MW",
	"database" : "sql6705587"
});


app.post("/save",(req, res) => {
	let data=[req.body.name, req.body.company, req.body.pkg ];
	let sql = "insert into student1 values(?,?,?)";
	con.query(sql,data,(err,result) => {
		if(err) res.send(err);
		else		res.send(result);
	});
});

app.listen(9111, () => { console.log("ready @ 9111 "); });

