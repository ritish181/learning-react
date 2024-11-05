import Joi from "joi";

const req = {name:"cavin", email:"anade", password:"123"}    

const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(100).required()
});
const { error }  = schema.validate(req);

  console.log(error);
