import express, { Request, Response } from "express";
import { createCourse } from "./routes";

const app = express();

app.listen(3333, () => console.log("Servidor online no likn: http://localhost:3333"));

app.get("/", (request: Request, response: Response) => {
    return response.json({
        status: "On-line"
    })
});

app.get("/createCouse", createCourse);
