const express = require("express")
const router = express.Router()

// Controller
const {
    register, 
    login, 
    getCurrentUser, 
    update,
    getUserById,
} = require("../controllers/UserController")

//middlewares
const validate = require("../middlewares/handleValidation")
const {
    useCreateValidation, 
    loginValidation, 
    userUpdateValidation
} = require("../middlewares/userValidations")

const authGuard = require("../middlewares/authGuard")
const {imageUpload} = require("../middlewares/imageUpload")

//routes
router.post("/register", useCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login )
router.get("/profile", authGuard, getCurrentUser)
router.put(
    "/",
    authGuard, 
    userUpdateValidation(), 
    validate, 
    imageUpload.single("profileImage"), 
    update
)
router.get("/:id", getUserById)

module.exports = router