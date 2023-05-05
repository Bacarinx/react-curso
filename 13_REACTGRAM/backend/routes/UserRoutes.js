const express = require("express")
const router = express.Router()

// COntroller
const {register, login, getCurrentUser} = require("../controllers/UserController")

//middlewares
const validate = require("../middlewares/handleValidation")
const {useCreateValidation, loginValidation} = require("../middlewares/userValidations")
const authGuard = require("../middlewares/authGuard")

//routes
router.post("/register", useCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login )
router.get("/profile", authGuard, getCurrentUser)

module.exports = router