import { Request, Response } from "express";

import CreateCursoService from "./CreateCouseService";

export function createCourse(request: Request, response: Response) {
  CreateCursoService.execute({
    name: "NodeJs",
    duration: 10,
    educator: "Dani",
  });

  return response.send();
}
