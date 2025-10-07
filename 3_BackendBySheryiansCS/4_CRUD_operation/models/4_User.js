import mongoose from 'mongoose';

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`); //connection & database name

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

// model allow you to perform operations like CREATE, READ, UPDATE, DELETE.
// model always create in plural form. like u write "user" then it will "users".
// "exports" is a property, not a method. 'users' is a collection name.
//$ Way 1 for creating & exporting module. ES Module Syntax
const user = mongoose.model('user', userSchema);
export default user;

//$ Way 2 for creating & exporting module. CommonJS Syntax
// module.exports = mongoose.model("user", userSchema);


// Extra information:
// mongoose.Schema is a constructor function