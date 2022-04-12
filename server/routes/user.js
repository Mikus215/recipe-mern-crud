import express from 'express'
import {postCreateUser, postLoginUser, deleteCookie} from '../controllers/userController.js'

const router = express.Router()

router.post('/register', postCreateUser)
router.post('/login', postLoginUser)
router.get('/logout', deleteCookie)

export default router