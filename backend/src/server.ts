import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware configuration
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

// Initialize the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Connect to the database
connectDB();
