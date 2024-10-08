import User from '../models/user.model.js';
import bycryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
    const {username , email, password } = req.body;
    const hashedPassword = bycryptjs.hashSync(password, 10 );
    const newUser = new User({username, email, password: hashedPassword });

    try{
        await newUser.save(); // await tells js to wait for the response and dont go to the next code until it gets it 
        res.status(201).json ({message: "User created succesfully!"});
    } catch(error)
    {
        next(error);
        
    }
   
}