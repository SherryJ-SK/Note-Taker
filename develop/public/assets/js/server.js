var express = require("express");
var path = require("path");
var fs = require("fs");
var dataJson = fs.readFileSync("./db.json", "utf8");
var db = JSON.parse(dataJson);

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
    return res.json(db);
})

app.get("/api/notes/:note", function (req, res) {
    var chosen = req.params.db;

    console.log(chosen);

    for (var i = 0; i < db.length; i++) {
        if (chosen === db[i].title) {
            return res.json(db[i]);
        }
    }
    return res.json(false);
});


// retrive info from db.js by POST api/notes, add into db.js
app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    // console.log("running!!");
    console.log(newNote);

    // newNote.id will be i++
    // append into the db.json file
    db.push(newNote);
    res.json(newNote);
})

// delete notes api/notes/:id

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
