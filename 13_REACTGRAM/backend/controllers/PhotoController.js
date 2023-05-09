const Photo = require("../models/Photo")
const User = require("../models/User")
const mongoose = require("mongoose")

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {

    const {title} = req.body
    const image = req.file.filename

    const reqUser = req.user

    const user = await User.findById(reqUser._id)

    //create photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name,
    })

    //if photo was created successfully, return data
    if(!newPhoto) {
        res.status(422).json({
            erros: ["Houve um problema, por favor tente novamente mais tarde"]
        })
        return
    }
    res.status(201).json(newPhoto)
}

// remove a photo from DB
const deletePhoto = async(req, res) => {

    const {id} = req.params

    const reqUser = req.user

    try {
        const photo = await Photo.findById(new mongoose.Types.ObjectId(id))

        //check if photo exist
        if(!photo) {
            res.status(404).json({errors: ["Foto não encontrada"]})
            return
        }

        //Check if photo belongs to user
        if(!photo.userId.equals(reqUser._id)) {
            res.status(422).json({errors: ["Ocorreu um erro, por favor tente novamente mais tarde"]
            })
        }

        await Photo.findByIdAndDelete(photo._id)

        res.status(200).json({id: photo._id, message: "Foto excluida com sucesso!"})
    } catch (error) {
        res.status(404).json({errors: ["Foto não encontrada"]})
        return
    }
}

module.exports = {
    insertPhoto,
    deletePhoto,
}