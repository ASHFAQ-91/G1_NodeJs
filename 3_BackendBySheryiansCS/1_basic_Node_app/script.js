import express from 'express';  // importing express

// taking all the features from  express method.
const app = express();

// middleware
app.use(express.json());                            // It helps to read json data
app.use(express.urlencoded({ extended: true }));    // It helps to read encoded data.

app.use(function (req, res, next) {
    console.log('middleware chala')
    next();
})
app.use(function (req, res, next) {
    console.log('middleware chala EAK AUR BAAR')
    next();
})


// Routes 
app.get("/", function (req, res) {
    res.send('Main Page');
})

app.get("/profile", function (req, res, next) {
    return next(new Error("Something went wrong"))  // Show on the console.
    // res.send('Profile Page');
})

// Error handler from express - framework website (guide).
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')        // show on the front-end.
})


app.listen(3000);