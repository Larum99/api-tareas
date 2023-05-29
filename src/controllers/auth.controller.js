import User from '../models/user'
import jwt from "jsonwebtoken";
import config from '../config'
import Role from '../models/role'

export const signup = async (req,res) => {
    const {username, email, password, roles} = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPasswords(password)
    })
   /*  console.log(newUser) */ /* para ver quee sta enviando */

   if (roles) {
       const foundRole = await Role.find({name: {$in: roles}})
       newUser.roles = foundRole.map(role => role._id)
   } else {
    const role = await Role.findOne({name: "user"})
    newUser.roles = [role._id];
   }

    const savedUser = await newUser.save();
    console.log(savedUser)
    
    /* res.json('signup') */ //para comprobar que se envia

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400  //24hors

    })

    res.status(200).json({token})
}
export const signin = async (req,res) => {
    
    const userFound = await User.findOne({email: req.body.email}).populate("roles");

    if(!userFound) return res.status(400).json({message: "user not found"})

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if(!matchPassword) return res.status(401).json({token: null, message: "incorrect password"})

    /* console.log(userFound) */ //para ver el usuario
    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400
    })
    res.json({token})
}