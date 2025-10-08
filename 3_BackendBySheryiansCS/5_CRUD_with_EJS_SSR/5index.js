import express from 'express';  // importing express
import path from 'path';
import { fileURLToPath } from 'url';  // NEW: Required for ES Modules

// FIX: Define __dirname for ES Module Scope
// ----------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ----------------------------------------------------

// taking all the features from  express method.
const app = express();
app.set('view engine', 'ejs');          // JT1: by default it check inside the "views" folder

// middleware
app.use(express.json());                            // It helps to read JSON data
app.use(express.urlencoded({ extended: true }));    // It helps to read URL-encoded data.
const staticPath = path.join(__dirname, './public');
app.use(express.static(staticPath));  // working with file and directory paths.



app.get("/", (req, res) => {
    res.render('script.ejs');
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});