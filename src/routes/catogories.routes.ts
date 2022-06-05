import { Router } from "express";
import { CategoriesRepository } from "../repository/Categories.repository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  if (!categoriesRepository.findByName(name)) {
    categoriesRepository.create({ name, description });
    return res.status(201).send();
  } else {
    return res.status(400).json({
      error: "Category already exists!"
    });
  }
})

categoriesRoutes.get("/", (req, res) => {

  const categories = categoriesRepository.list();

  return res.status(200).json(categories);
})

export { categoriesRoutes };
