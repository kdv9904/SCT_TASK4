import express from 'express';
import connectDB from './routes/db.js';
import dotenv from'dotenv';
import routes from './routes/Listroute.js'
import cors from 'cors';

const app=express();
dotenv.config({});
app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/hello',(req,res)=>{
    res.send('Hello World!');
});
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
     connectDB();
    console.log(`Server is running on port ${PORT}`);
})