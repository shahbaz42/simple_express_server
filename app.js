const express = require("express");
const app = express()

app.get("/", function(req, res){
    res.send("OK, request recieved.")
})

app.listen(8000, function(){
    console.log("Server is up.");
})