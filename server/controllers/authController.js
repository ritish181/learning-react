import collection from '../mongodb.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await collection.findOne({email});
        const isPasswordEqual = await bcrypt.compare(password, user.password);

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        if(!user){
            return res.status(403)
                .json({
                    message: 'User does not exists, please register.', 
                    success: false
                });
        }
        else if(!isPasswordEqual){
            res.status(409)
                .json({ 
                    message: "Incorrect username or password",
                    success: false 
                });
        }
        else{
            res.status(200)
                .json({ 
                    message: "Logged in successfully", 
                    success: true,
                    jwtToken,
                    email,
                    name: user.name
                });
        }
    } 
    catch (error) {
        res.status(500)
            .json({ 
                message: "Internal server error", 
                success: false 
            });
    }
};

export const signup = async (req, res) => {
    try {
        console.log(req.body);
        
        const { name, email, password } = req.body;
        const user = await collection.findOne({email});

        if(user){
            return res.status(409)
                .json({
                    message: 'User already exists, you can login', 
                    success: false
                });
        }
        const userModel = new collection({name, email, password});
        userModel.password = await bcrypt.hash(password,10);
        userModel.save();
        
        res.status(201)
            .json({ 
                message: "Signed up successfully", 
                success: true 
            });
    } 
    catch (error) {
        res.status(500)
            .json({ 
                message: "Internal server error", 
                success: false 
            });
    }
};
