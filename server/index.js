import dotenv from "dotenv";
dotenv.config();
import connectToDataBase from "./db.js";
import express from "express";
import cors from "cors";
//Routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
connectToDataBase();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.get("/api/config/google", (req, res) =>
  res.send(process.env.GOOGLE_CLIENT_ID)
);

const port = 5000;

app.get("/", (req, res) => {
  res.send("api is running...");
});

app.listen(port, () => {
  console.log(`Server Runs on port:${port}`);
});
