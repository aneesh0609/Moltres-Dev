import express from 'express' ;
import { login, logout, passChange, register, resetOtp, sendOtp, userIsAuthenticated, verifyEmail } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';




const Route = express.Router();

Route.post('/register', register) ;
Route.post('/login' , login);
Route.post('/logout', logout);
Route.post('/sent-otp',userAuth,sendOtp);
Route.post('/verifyEmail',userAuth,verifyEmail);
Route.post('/user-auth',userAuth,userIsAuthenticated);
Route.post('/resetOtp',userAuth,resetOtp);
Route.post('/pass-change',userAuth,passChange);

export default Route ;