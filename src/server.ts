import express from "express";
import chalk from "chalk";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories",categoriesRoutes);

app.listen(3000, () => {
    console.log("server is running on port 3000!")
});

