import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Manual CORS handling
const corsOptions = {
  origin: 'http://localhost:5173', // Update to your frontend URL
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
};
app.use(cors(corsOptions));

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
