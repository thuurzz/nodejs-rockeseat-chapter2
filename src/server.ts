import express, { Request, Response } from "express";

const app = express();

app.use(express.json)

app.listen(3333, () =>
  console.log("Servidor online no likn: http://localhost:3333")
);

app.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "Servidor On-line!"
  })
})

app.post("/courses", (req: Request, res: Response) => {
  const { name } = req.body;
  return res.json({
    name
  })
})
