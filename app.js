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


app.get("/calculate/:operation", (req, res) => {
    const opr = req.params.operation

    if (opr == "add") {
        // format of url : http://localhost:8000/calculate/add?num1=42&num2=42
        const num1 = Number(req.query.num1)
        const num2 = Number(req.query.num2)
        const result = num1 + num2
        res.send(result + "")
    } else {
        res.send("Operation not found");
    }
})

app.listen(8000, function(){
    console.log("Server is up.");
})
