import express from "express"
import { loginUser,registerUser } from "../controllers/userController.js"


const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

userRouter.get("/test",(req,res)=>{
    res.send("User route working")
})

export default userRouter;
