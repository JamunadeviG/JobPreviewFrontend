import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import departmentRoutes from './routes/departmentRoutes.js';
import facultyRoutes from './routes/facultyRoutes.js';

dotenv.config();
const app = express();

// DB
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/departments', departmentRoutes);
app.use('/api/faculties', facultyRoutes);

app.get('/', (req, res) => res.send('College Management API is running'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));