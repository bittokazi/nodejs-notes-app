import express from "express";
import {
  AddCategoryController,
  GetCategoriesController,
} from "../controllers/CategoryController";
import FormValidator from "./../middlewares/FormValidator";

const router = express.Router();

router.get("/", GetCategoriesController);
router.post("/", FormValidator("createCategory"), AddCategoryController);

export default router;
