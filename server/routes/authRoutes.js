import express from 'express' ;
import { login, logout, register } from '../controllers/authController.js';



const Route = express.Router();

Route.get('/register', register) ;
Route.post('/login' , login);
Route.post('/logout', logout);

export default Route ;