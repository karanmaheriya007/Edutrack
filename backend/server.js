const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello, Karan!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})