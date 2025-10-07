import express from 'express';  // importing express

// taking all the features from  express method.
const app = express();

// middleware
app.set('view engine', 'ejs');          // JT1: by default it check inside the "views" folder

// Route
app.get("/", function(req, res) {
    res.render('script.ejs')
    // res.send("hello everyone");
})

app.listen(3000);