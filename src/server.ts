import express, { Request, Response } from "express";

const app = express();

app.listen(3333, () =>
  console.log("Servidor online no likn: http://localhost:3333")
);

app.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "Servidor On-line!"
  })
})
