const express = require("express")
const router = express.Router()

// COntroller
const {register} = require("../controllers/UserController")

//middlewares
const validate = require("../middlewares/handleValidation")
const {useCreateValidation} = require("../middlewares/userValidations")

//routes
router.post("/register", useCreateValidation(), validate, register)

module.exports = router