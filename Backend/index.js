import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// import bookRoute from "../route/book.route.js";
import userRoute from "./route/user.route.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(cors({
    origin: "https://syednotes.vercel.app/",  // Make sure this is the exact frontend URL
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json());

const PORT = process.env.PORT || 4001;  // Default to 4001 if not specified
const URI = process.env.MongoDBAtlasURI;

app.get("/",(req,res)=>{
    res.json({
        success:true,
        message: "Syed Notes API is running"  // Replace this message with your own API description or use a more descriptive message.
    })
})


// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB Atlas");
})
.catch((error) => {
    console.error("Error connecting to MongoDB Atlas: ", error.message);
});

console.log(URI)
// Defining routes
// app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is listening on port ${PORT}`);
});
