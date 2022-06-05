import { Router } from "express";
import { Category } from "../model/category";
import { CategoriesRepository } from "../repository/Categories.repository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  categoriesRepository.create({ name, description });

  return res.status(201).send();
})

export { categoriesRoutes };
