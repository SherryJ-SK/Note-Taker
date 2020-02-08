var express = require("express");
var path = require("path");
var fs = require("fs");
var dataJson = fs.readFileSync("./db/db.json", "utf8");
var db = JSON.parse(dataJson);

var app = express();
// var PORT = 3000;
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join("../public")));
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
    var chosenNote = req.params.note;
    console.log(chosenNote);

    for (var i = 0; i < db.length; i++) {
        if (chosenNote === db[i].id) {
            return res.json(db[i]);
        }
    }
});

// retrive info from db.js by POST api/notes, add into db.js
app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    newNote.id = newNote.title.replace(/\s+/g, "").toLowerCase();
    // console.log(newNote);
    db.push(newNote);
    fs.writeFileSync("../db/db.json", JSON.stringify(db) + `\n`, (err) => {
        if (err) {
            return err;
        }
    });
    res.json(newNote);
})

// delete notes api/notes/:id
app.delete("/api/notes/:note", function (req, res) {
    var deleteNote = req.params.note;
    for (var i = 0; i < db.length; i++) {
        if (deleteNote === db[i].id) {
            const remove = db.splice(i);
            fs.writeFileSync("../db/db.json", JSON.stringify(db) + `\n`, (err) => {
                if (err) {
                    return err;
                }
            });        
            res.json(remove);
        }
    }
});

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
