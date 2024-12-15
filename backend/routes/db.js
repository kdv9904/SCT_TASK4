import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = () => {
    const MONGO_URL = process.env.MONGO_URL;
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB connected...');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    });
};

export default connectDB;
