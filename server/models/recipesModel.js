import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    creator: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    imgUrl: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    typeOfFood: {
        type: String,
        require: true
    },
    budget: {
        type: Number,
        require: true
    },
    idCreator: {
        type: String,
        require: true
    },
    rating: [{ idUser: String, userRating: Number }],
    calculatedRating: {
        type: Number,
        default: 0.00
    }
})

const RecipeModel = mongoose.model('RecipeModel', recipeSchema)

export default RecipeModel