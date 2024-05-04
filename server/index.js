import dotenv from "dotenv";
dotenv.config();
import connectToDataBase from "./db.js";
import express from "express";
import cors from "cors";
//Routes
import productRoutes from "./routes/productRoutes.js";
connectToDataBase();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);
const port = 5000;

app.get("/", (req, res) => {
  res.send("api is running...");
});

app.listen(port, () => {
  console.log(`Server Runs on port:${port}`);
});
