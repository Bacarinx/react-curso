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

//Register user
const register = async(req, res) => {
    res.send("Registro")
}

module.exports = {
    register, 
}