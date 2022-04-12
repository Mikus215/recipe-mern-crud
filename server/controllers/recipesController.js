import mongoose from "mongoose";
import RecipeModel from "../models/recipesModel.js";

export const postCreateRecipes = async (req,res,next) => {
    const { creator, title, imgUrl, description, budget, typeOfFood } = req.body
    const userId = req.user.user._id

    const newRecipe = RecipeModel({ creator, title, imgUrl, description, budget, typeOfFood, idCreator: userId })
    try {
        await newRecipe.save()

        res.status(201).json(newRecipe)
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const getRecipes = async (req,res,next) => {
    try {
        const recipes = await RecipeModel.find();

        res.status(200).json(recipes);        
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const deleteRecipes = async (req, res, next) => {

    const { id } = req.params

    const userId = req.user.user._id

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id ${id}`)

    try {
        const recipe = await RecipeModel.findById(id)

        if (userId !== recipe.idCreator) return res.status(401).json({ messgae: 'Unauthorized' })

        await RecipeModel.deleteOne(recipe);

        res.status(202);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateRecipes = async (req, res, next) => {

    const { id } = req.params
    const { title, imgUrl, description, budget, typeOfFood } = req.body
    const userId = req.user.user._id

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id ${id}`)



    const updateRecipe = { title, imgUrl, description, budget, typeOfFood }

    try {

        const recipe = await RecipeModel.findById(id)

        if (userId !== recipe.idCreator) return res.status(401).json({ messgae: 'Unauthorized' })

        const updatedRecipe = await RecipeModel.findByIdAndUpdate(id, updateRecipe)

        res.status(200).json(updatedRecipe)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getRecipe = async (req, res, next) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id ${id}`)

    try {

        const recipe = await RecipeModel.findById(id)

        res.status(200).json(recipe)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const getUserRecipe = async (req, res, next) => {

    const userId = req.user.user._id

    try {

        const userRecipes = await RecipeModel.find({ idCreator: userId })

        res.status(200).json(userRecipes)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addRating = async (req, res, next) => {

    const { id } = req.params
    const { rating } = req.body
    const userId = req.user.user._id
    let sumRating = 0;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id ${id}`)

    try {

        const recipe = await RecipeModel.findById(id)

        const alreadyReviewed = recipe.rating.find(el => (
            el.idUser === userId
        ))

        if (alreadyReviewed) {
            return res.status(400).json({ message: "You have already rated this recipe" })
        }

        recipe.rating.push({
            idUser: userId,
            userRating: rating
        })

        recipe.rating.forEach(el => {
            sumRating += el.userRating
        })

        recipe.calculatedRating = sumRating / recipe.rating.length;

        await recipe.save()

        res.status(201).json("Added New Rating")
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getTopFive = async (req, res, next) => {
    try {
        const bestRecipes = await RecipeModel.find().sort({ calculatedRating: -1 }).limit(5)

        res.status(201).json(bestRecipes)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getFilterRecipes = async (req, res, next) => {

    const { recipe } = req.params

    try {
        let filteredRecipe = await RecipeModel.find({typeOfFood: recipe})

        if (Object.keys(filteredRecipe).length === 0) filteredRecipe = await RecipeModel.find({})

        res.status(201).json(filteredRecipe)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}