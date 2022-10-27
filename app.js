const express = require("express");
const app = express()

app.get("/", function(req, res){
    var name = ""
    res.send(`Your name is ${name}`)
})

app.get("/toUppercase", function(req, res){
    console.log(req.query);
    var name = req.query.name;
    var movie = req.query.fav_movie;
    name = name.toUpperCase()
    res.send(`my name is ${name}, my favorite movie is ${movie}`);
})

app.listen(8000, function(){
    console.log("Server is up.");
})
