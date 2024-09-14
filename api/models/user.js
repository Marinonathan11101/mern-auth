import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, // Has to have a username
        unique: true, // means you cant have two users with the same username 
    },
    email: {
        type: String, 
        required: true, // Has to have a username
        unique: true, // means you cant have two users with the same username 
    },
    password: {
        type: String, 
        required: true, // Has to have a username
    },
 

}, {timestamps: true });

const User = mongoose.model('User', userSchema); // creating the model 

export default User; // We use this so we could use it anywhere in our application 