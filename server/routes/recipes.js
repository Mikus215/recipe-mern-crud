import express from 'express'
import { postCreateRecipes, getRecipes, deleteRecipes, updateRecipes, getRecipe, getUserRecipe, addRating, getTopFive, getFilterRecipes } from '../controllers/recipesController.js'
import { cookieJwtAuth } from '../middleware/cookieJwtAuth.js'
import {  uploadImage, uploadEnd } from '../middleware/uploadImage.js'

const router = express.Router()

router.post('/', cookieJwtAuth, uploadImage, uploadEnd, postCreateRecipes)

router.get('/', getRecipes)
router.get('/type/:recipe', getFilterRecipes)
router.get('/userRecipes',cookieJwtAuth , getUserRecipe)
router.get('/details/:id', getRecipe)
router.get('/topfive', getTopFive)

router.delete('/:id', cookieJwtAuth, deleteRecipes)

router.patch('/:id', cookieJwtAuth ,updateRecipes)
router.patch('/rating/:id', cookieJwtAuth, addRating)


export default router