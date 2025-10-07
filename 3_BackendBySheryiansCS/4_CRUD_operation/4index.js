import express from 'express';
import userModel from './models/4_User.js';

const app = express();

// Route
app.get("/", (req, res) => {
    res.send("Hello Everyone")
})

//$ create
app.get("/create", async (req, res) => {
    let createdUser = await userModel.create({
        name: "ASHFAQ",
        username: "MASQ",
        email: "masq@gmail.com",
    });

    res.send(createdUser);
})

//$ read
app.get("/read", async (req, res) => {
    let readUser = await userModel.find();

    res.send(readUser);
})

//$ update
app.get("/update", async (req, res) => {
    // userModel.findOneAndUpdate({findone value}, {update value}, {new: true})
    let updatedUser = await userModel.findOneAndUpdate({ name: "ASHFAQ" }, { username: "ORION" }, { new: true });

    res.send(updatedUser);
})

//$ delete
app.get("/delete", async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({ username: "MASQ" });

    res.send(deletedUser);
})

app.listen(3000);