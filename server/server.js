
import express from 'express' ;
import cookieParser from "cookie-parser";
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/database.js';

const app = express();
const Port = process.env.PORT || 8000

connectDB();

app.use(express.json()) ;
app.use(cookieParser());
app.use(cors({credentials: true}));


app.get('/', (req,res) => {
  res.send("hii from server")
})

app.listen(Port, () => console.log(`server started on ${Port}`));