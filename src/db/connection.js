// src/db/connection.js

const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://mmiik0154:W33d1%40gmx.@cluster0.4f14o.mongodb.net/encrypt', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;
