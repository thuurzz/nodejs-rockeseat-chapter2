import express, { Request, Response } from "express";
import { categoriesRoutes } from "./routes/Catogories.routes";
import { specificationRoutes } from "./routes/Specifications.routes";

const app = express();

app.use(express.json());

app.listen(3333, () =>
  console.log("Servidor online no likn: http://localhost:3333")
);

app.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "Servidor On-line!!!"
  })
});

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);


