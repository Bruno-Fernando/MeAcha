const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://meAchaDBUser:Q1UbFrEIn9qqmCIm@meacha-hlwzt.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;