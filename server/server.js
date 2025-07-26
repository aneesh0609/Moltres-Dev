
import express from 'express' ;
import cookieParser from "cookie-parser";
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/database.js';
import Route from './routes/authRoutes.js';
import userRoute from './routes/userRoute.js';




const app = express();
const Port = process.env.PORT || 8000

connectDB();

const allowedOrigins = ['http://localhost:5173']

app.use(express.json()) ;
app.use(cookieParser());
app.use(cors({origin: allowedOrigins  ,credentials: true}));


app.get('/', (req,res) => {
  res.send("hii from server")
})

app.use('/api/auth', Route);

app.use('/api/user', userRoute);


app.listen(Port, () => console.log(`server started on ${Port}`));