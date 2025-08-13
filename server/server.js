
import express from 'express' ;
import cookieParser from "cookie-parser";
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/database.js';
import Route from './routes/authRoutes.js';
import userRoute from './routes/userRoute.js';
import messageRouter from './routes/messageRoute.js';




const app = express();
const Port = process.env.PORT || 8000

connectDB();

const allowedOrigins = [process.env.FRONTEND_URL,
    process.env.LOCAL_PORT, 
    process.env.DASHBOARD_URL
];

app.use(express.json()) ;
app.use(cookieParser());

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked for origin: ${origin}`));
    }
  },
  credentials: true
}));


app.get('/', (req,res) => {
  res.send({
    activeStatus : true,
    error: false
  })
})

app.use('/api/auth', Route);

app.use('/api/user', userRoute);
app.use('/api/me' , messageRouter);


app.listen(Port, () => console.log(`server started on ${Port}`));