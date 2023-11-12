const sql = require("mysql");

const connection = sql.createConnection({
        host:'localhost',
        user:'root',
        password:'Akhil@4802',
        database:'buddi',
        insecureAuth: false
    }
);

connection.connect((err)=>{
    if (err) throw new err;
    console.log("Connected! database");
})

