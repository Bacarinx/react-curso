const express = require("express")
const router = express.Router()

// COntroller
const {register, login} = require("../controllers/UserController")

//middlewares
const validate = require("../middlewares/handleValidation")
const {useCreateValidation, loginValidation} = require("../middlewares/userValidations")

//routes
router.post("/register", useCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login )

module.exports = router