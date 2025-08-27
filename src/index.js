import express from "express";
import "dotenv/config";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
import bookRoutes from "./routes/bookRoutes.js"
import {connectDB} from "./lib/db.js";


const PORT = process.env.PORT
const app = express();
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("✅ Server is alive with env");
});
app.use("/api/auth",authRoutes);
app.use("/api/books",bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
