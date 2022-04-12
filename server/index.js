import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv';
import recipesRouter from './routes/recipes.js'
import userRouter from './routes/user.js'
import cookieParser from 'cookie-parser'

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors({credentials: true, origin: 'https://food-project-recipes.netlify.app'}))
app.use(cookieParser())

app.use('/recipes' ,recipesRouter)
app.use('/user', userRouter)

app.get('/', (req, res) => {
  res.send("Recipe API")
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));