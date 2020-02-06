var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});


// read db.js from GET api/notes, return as JSON
app.get("/api/notes", function (req, res) {
    return res.json(//return JSON from the db.json
    )
})

// retrive info from db.js by POST api/notes, add into db.js
app.post("/api/notes", function (req, res) {
    var newNote = req.body;

    // newNote.id will be i++
    // append into the db.json file
    res.json(newNote);

})

// delete notes api/notes/:id


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
