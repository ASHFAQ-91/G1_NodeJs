//TODO: Dynamic Routing.
import express from 'express';

const app = express();

app.get("/", function(req, res) {
    res.send("Main page");
})

//IMPORTANT:START: ":" creates a dynamic routing.
app.get("/profile/:username", function(req, res) {
    res.send(`Welcome ${req.params.username}`);
})

app.get("/about/:username/:age", function(req, res) {
    res.send(`Welcome ${req.params.username} & Your age is ${req.params.age}`);
})
// END:

app.listen(3000);