import express from 'express';
import collection from 'mongodb';

const Signup = async (req, res) => {
    const data ={
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    try{
        await collection.insertMany([data]);
        res.render("login");
        res.status(200).json({status: "signup successfull"})
    }
    catch(error)
    {
        res.status(404).json({message: error.message});
    }
    
}

export default Signup;