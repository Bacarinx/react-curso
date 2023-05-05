const User = require("../models/User")

const bcript = require("bcryptjs")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT_SECRET

// Generate user Token
const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d"
    })
}

//Register user and sign in
const register = async(req, res) => {
    const {name, email, password} = req.body

    //check if user exist
    const user = await User.findOne({email})

    if(user) {
        res.status(422).json({erros: ["Por favor utilize outro e-mail"]})
        return
    }

    //generate password hash
    const salt = await bcript.genSalt()
    const passwordHash = await bcript.hash(password, salt)

    //create user
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })

    //if user was created succesfully, return the token
    if(!newUser) {
        res.status(422).json({erros: ["Houve um erro, por favor tente mais tarde"]})
        return
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id)
    })
}

//Sign user in
const login = async(req, res) => {
    const {email, password} = req.body
    
    const user = await User.findOne({email})

    //check if user exist
    if(!user) {
        res.status(404).json({errors: ["Usuário não encontrado"]})
        return
    }

    //Check if password matches
    if(!(await bcript.compare(password, user.password))) {
        res.status(422).json({erros: ["Senha Inválida"]})
        return
    }

    //return user with token
    res.status(201).json({
        _id: user._id,
        profileImage: user.profileImage,
        token: generateToken(user._id)
    })
}

//Get current Logged in user
const getCurrentUser = async(req, res) => {
    const user = req.user

    res.status(200).json(user)
}

module.exports = {
    register, 
    login,
    getCurrentUser,
}