const express=require("express")
const app=express()

const testRoute = require("./src/Routes/test.route");
const userDetailsRoute = require('./src/Routes/userDetails.route')

app.use(testRoute);
app.use(userDetailsRoute)

app.listen(3000,()=>{
    console.log("server runs at 3000 port")
})