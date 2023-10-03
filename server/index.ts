
import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

if(typeof process.env.MONGO_URI === "string"){
mongoose.connect(process.env.MONGO_URI, {  dbName: "courses" })


 .then(()=>console.log('database connected'))
 .catch((err)=>console.log(err))
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server running on port ' +  port));