
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");
dotenv.config()
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todo");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" })
 .then(()=>console.log('database connected'))
 .catch((err)=>console.log(err))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server running on port ' +  port));